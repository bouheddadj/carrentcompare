// app.js (ou server.js, selon le nom de votre fichier principal)

// server.js
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const User = require('./models/user'); 

const app = express();
const PORT = process.env.PORT || 3000;

const uri = "mongodb+srv://AmineOussamaNasrallah:Thrift60Region@bgn.7r6dckq.mongodb.net/Ecole?retryWrites=true&w=majority";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function main() {
    try {
        // Connexion à MongoDB 
        await mongoose.connect(uri, clientOptions);
        console.log("Connexion à MongoDB réussie !");

        // Récupérer tous les utilisateurs
        const users = await User.find({username : "Oussamaa"});
        console.log('Utilisateurs récupérés :', users);

        // Ajouter des utilisateurs à la base de données si jamais ils n'existent pas!
        const existingUsers = await User.find();

        if (existingUsers.length === 0) {
            // Si aucune donnée n'existe, alors insérer les données
            const usersData = [
                { username: 'Amine', age: 25 },
                { username: 'Oussamaa', age: 30 },
                { username: 'Nassrallah', age: 22 },
            ];
            await User.insertMany(usersData);
            console.log(usersData);
        } else { console.log("Les données existent déja!")}

    } catch (error) {
        console.error('Erreur lors de l\'exécution de main:', error);
    } finally {
        //mongoose.connection.close(); // Fermer la connexion après l'opération
    }
}


// Utiliser le middleware pour analyser le corps des requêtes en JSON
app.use(express.json());

// Utiliser le middleware CORS
app.use(cors());

// Utiliser les routes pour les utilisateurs
app.use('/api', userRoutes);

// Servir les fichiers statiques depuis le dossier public
app.use(express.static('public'));
    // pour servir des fichiers statiques (tels que des fichiers HTML, des fichiers CSS, des fichiers JavaScript, des images, etc.) 
    // à partir d'un répertoire spécifique sur votre serveur, généralement appelé "public".

// Démarrer le serveur Express
app.listen(PORT, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});

// Appeler la fonction main pour exécuter le bloc de code
main();

// Ainsi, à chaque nouvelle entité que vous ajoutez, vous créez un modèle correspondant et une route pour 
// gérer les opérations liées à cette entité. Cela maintient une structure organisée et modulaire dans 
// votre application.

// App => get post patch delet