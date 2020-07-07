const { Schema, model, Types } = require("mongoose");

const imageCardSchema = new Schema({
    image:{
        type: String,     
    }
},
{timestamps:true}
);

module.exports = model("ImageCard", imageCardSchema );
