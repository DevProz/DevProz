const mongoose = require("mongoose")

const Schema = mongoose.Schema

const gameSchema = new Schema({ 
    players: [{
        type: Schema.Types.ObjectId, 
        ref: 'Players'
    }],
    pictureCards: [{
        type: Schema.Types.ObjectId,
        ref: 'PictureCards'
    }], 
    sentenceCards: [{
        type: Schema.Types.ObjectId,
        ref: 'SentenceCards'
    }], 
    entranceCode: { 
        type: String,
        required: true,
        unique: true, 
        minlength: 4, 
        maxlength: 4
    }
},
    { timestamps: true
    }
);