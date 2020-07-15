const {
    Schema,
    model
} = require("mongoose");

const imageCardSchema = new Schema({
    image: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = model("ImageCard", imageCardSchema);