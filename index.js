'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error connecting db: ${err}`);
    }
    console.log('Database connection successful');

    app.listen(config.port, () => {
        console.log(`API REST running at http://localhost:${config.port}`);
    })
})


