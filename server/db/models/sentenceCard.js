const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sentenceCardSchema = new Schema({
    sentence:{
        type: String, 
        required: true,       
    }
},

{timestamps:true}

);

const SentenceCard = mongoose.model("SentenceCard", sentenceCardSchema);
module.exports = { SentenceCard };
