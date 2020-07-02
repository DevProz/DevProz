const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const compression = require("compression");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const socketio = require("socket.io");

//secrets file
require("dotenv").config();

const PORT = process.env.SERVER_PORT || 5000;

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// compression middleware (make things smaller before sending to network)
app.use(compression());

// static middleware
app.use("/static", express.static(path.join(__dirname, "../public")));

// cookie middleware
app.use(cookieParser());

//connecting to database
const uri =
  process.env.NODE_ENV === "development"
    ? "mongodb://localhost:27017/devproz"
    : process.env.DB_SECRET;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
console.log(uri);
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", () => {
  console.log("we are connected");
});

// session middleware with passport
app.use(
  session({
    secret: process.env.SECRET_KEY,
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, //one week
    },
    store: new MongoStore({ mongooseConnection: connection }),
  })
);

// routes
app.use("/api", require("./api"));

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(PORT, () => console.log(`Connected to ${PORT}`));

module.exports = app;
