const { Schema, model, Types } = require("mongoose");

const imageCardSchema = new Schema({
    image:{
        type: String, 
        default: 'heyyy'
        //required: true,       
    }
},
{timestamps:true}
);

module.exports = model("ImageCard", imageCardSchema );
