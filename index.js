'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar la db: ${err}`);
    }
    console.log('Conexion a la db establecida');

    app.listen(config.port, () => {
        console.log(`API REST corriendo en http://localhost:${config.port}`);
    })
})


