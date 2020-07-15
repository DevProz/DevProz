const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const compression = require("compression");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const server = require("http").createServer(app).listen(PORT);
const io = require("socket.io").listen(server);

require("./socket")(io);

require("dotenv").config();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(compression());

app.use("/static", express.static(path.join(__dirname, "../public")));

app.use(cookieParser());

const uri = process.env.NODE_ENV === "development" ? "mongodb://localhost:27017/devproz" : process.env.DB_SECRET;
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true,  
    useUnifiedTopology: true 
});

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", ()  => {
  console.log("we are connected");
});

app.use(session({
    secret: process.env.SECRET_KEY, 
    saveUninitialized : true, 
    resave : true, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
    store: new MongoStore({mongooseConnection: connection});
}));

app.use("/api", require("./api")); 

app.use("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "public/index.html"));
})

app.use((err, req, res, next) => {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error");
});

app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;