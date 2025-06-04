const book = require('../models/bookmodel');
const express = require('express');

const router = express.Router();

// Route for adding a book
router.post('/', (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishedyear) {
            return res.status(400).send('Please provide all required fields: title, author, and publishedYear');
        }
        const { title, author, publishedyear } = req.body;
        const newBook = new book.Book({
            title,
            author,
            publishedyear
        });
        newBook.save().then(() => {
            return res.status(201).send('Book added successfully');
        }).catch((error) => {
            return res.status(500).send('Error adding book: ' + error.message);
        });
    }
    catch (error) {
        console.error(error.message);
        return res.status(500).send('Internal Server Error');
    }
});

// Route for getting all books
router.get('/', async (req, res) => {
    try {
        const books = await book.Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Internal Server Error');
    }
});

// Route for getting a book by ID
router.get('/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const bookData = await book.Book.findById(bookId);
        if (!bookData) {
            return res.status(404).send('Book not found');
        }
        return res.status(200).json(bookData);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Internal Server Error');
    }
});

// Route for updating a book by ID
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishedyear) {
            return res.status(400).send('Please provide all required fields: title, author, and publishedYear');
        }
        const bookId = req.params.id;
        const result = await book.Book.findByIdAndUpdate(bookId, req.body);
        if (!result) {
            return res.status(404).send('Book not found');
        }
        return res.status(200).send('Book updated successfully');
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Internal Server Error');
    }
});

// Route for deleting a book by ID
router.delete('/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const result = await book.Book.findByIdAndDelete(bookId);
        if (!result) {
            return res.status(404).send('Book not found');
        }
        return res.status(200).send('Book deleted successfully');
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Internal Server Error');
    }
});

module.exports = router;