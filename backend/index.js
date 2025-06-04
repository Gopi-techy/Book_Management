const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors= require('cors');
dotenv.config();
const bookRoutes = require('./routes/booksroutes');

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());

app.use(cors({ //or app.use(cors()) to allow all origins
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers
}));

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send('Book API is running');
});

app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect(process.env.MongoDB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
})