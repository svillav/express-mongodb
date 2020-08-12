const express = require('express');
const bodyParser = require('body-parser');

// Imports routes
const user = require('./routes/user.route');
const comment = require('./routes/comment.route');
// Initialize express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb+srv://SantiagoVilla-505:5697965mdb@cluster0.qr7pl.mongodb.net/vue-express?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);
app.use('/comments', comment);

const port = 5000;

app.listen(port, () => {
    console.log(`Sever is up and running on port number ${port}`);
});