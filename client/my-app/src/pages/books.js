// Require Mongoose and the Schema needed
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema {{
    title: String,
    authors: [String],
    description: String,
    image: {
        type: {String},
    }
    link: {
        type: String,
    }
}}

const Books = mongoose.model("Books", bookSchema);
module.exports = Books