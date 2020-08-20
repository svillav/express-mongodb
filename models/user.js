'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    name: String, 
    email: { type: String, unique: true, lowercase: true },
    password: { type: String, select: false },
    signupDate: { type: Date, default: Date.now() },
    lastLogin: Date 
})


module.exports = mongoose.model('User', UserSchema);