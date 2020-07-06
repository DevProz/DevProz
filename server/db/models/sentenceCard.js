const { Schema, model, Types } = require("mongoose");

const sentenceCardSchema = new Schema({
    sentence:{
        type: String, 
        required: true,       
    }
},

{timestamps:true}

);

module.exports = model("SentenceCard", sentenceCardSchema);
