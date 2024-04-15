// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const carRoutes = require('./routes/companiesRoutes');

// const userRoutes = require('./routes/userRoutes');
// const User = require('./models/user'); 

const app = express();
const PORT = process.env.PORT || 3001;

const uri1 = "mongodb+srv://AmineOussamaNasrallah:Thrift60Region@bgn.7r6dckq.mongodb.net/Ecole?retryWrites=true&w=majority";
const uri2 = "mongodb+srv://AmineOussamaNasrallah:Thrift60Region@bgn.7r6dckq.mongodb.net/Cars?retryWrites=true&w=majority";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function main() {
    try {
        // Connexion à MongoDB 
        await mongoose.connect(uri2, clientOptions);
        console.log("Connexion à MongoDB réussie !");
    } catch (error) {
        console.error('Erreur lors de l\'exécution de main:', error);
    } finally {
        //mongoose.connection.close(); // Fermer la connexion après l'opération
    }
}

app.use(express.json());
app.use(cors());

// Utiliser la route pour récupérer les données de Leo-and-go
app.use('/api', carRoutes); 

// app.use('/api', userRoutes);


app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});

main();
