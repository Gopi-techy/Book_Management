const mongoose = require('mongoose');

const bookschema = mongoose.Schema(
    {
        title: {
            type : String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishedyear: {
            type: Number,
            required: true,
        },
    },
        {
            timestamps: true,
        }
);
exports.Book = mongoose.model('Book', bookschema);