const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageCardSchema = new Schema({
    image:{
        type: String, 
        required: true,       
    }
},

{timestamps:true}

);

const ImageCard = mongoose.model("ImageCard",imageCardSchema );
module.exports = { ImageCard };
