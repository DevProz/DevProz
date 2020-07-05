const { Schema, model, Types } = require("mongoose");

// const Schema = mongoose.Schema;

const imageCardSchema = new Schema({
    image:{
        type: String, 
        required: true,       
    }
},
{timestamps:true}
);

// const ImageCard = mongoose.model("ImageCard",imageCardSchema );
module.exports = model("ImageCard",imageCardSchema );
