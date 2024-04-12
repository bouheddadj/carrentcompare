// models/user.js
//Il contient les entétes de la collection

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    age: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

//EXPLICATION:
// Le dossier "models" dans une application MERN (MongoDB, Express.js, React, Node.js) contient 
// généralement les définitions des modèles de données utilisés pour interagir avec la base de données
//  MongoDB. Un modèle représente la structure des données que votre application utilise, et il est 
//  utilisé pour effectuer des opérations sur la base de données, telles que l'insertion, la mise à jour, 
//  la recherche, etc. et c'est nécessaire, par exemple pour mettre un modéle à jour au futur.