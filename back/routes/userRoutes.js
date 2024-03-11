// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

// POST create user
router.post('/users', async (req, res) => {
    const { username, age } = req.body;

    try {
        const newUser = new User({ username, age });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//EXPLICATION:
// otre serveur Express, lorsqu'il reçoit une requête à l'URL /api/users, exécute une opération sur la 
// base de données (par exemple, récupérer la liste des utilisateurs) et renvoie le résultat sous forme 
// de JSON en réponse à la requête HTTP.

// le serveur Express est la partie du backend de l'application. Il s'agit du serveur web construit avec 
// le framework Express.js, qui gère les requêtes HTTP, les routes et les interactions avec la base de
//  données MongoDB.

//  La route '/api/users' est définie pour répondre aux requêtes HTTP GET. Lorsque quelqu'un accède à
//  cette URL, le serveur Express exécute le code de la fonction associée. Ici, cela signifie qu'il
//   récupère tous les utilisateurs de la base de données MongoDB à l'aide de User.find() 
//   et renvoie ces utilisateurs sous forme de réponse JSON. 

// Lorsque vous accédez à localhost:3000/api/users dans votre navigateur ou à l'aide d'un client HTTP tel 
// que Postman, le serveur Express exécute la logique définie dans la route, interagit avec la base de 
// données MongoDB et renvoie les résultats en tant que réponse HTTP.