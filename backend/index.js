const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const book = require('./models/bookmodel');
dotenv.config();
const bookRoutes = require('./routes/booksroutes');

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());


app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send('Book API is running');
});

app.use('/api', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect(process.env.MongoDB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
})