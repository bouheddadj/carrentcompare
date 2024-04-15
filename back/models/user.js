// models/user.js
//Il contient les entétes de la collection

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    age: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
