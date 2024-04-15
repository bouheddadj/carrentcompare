// entreprisesRoutes.js
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const company = require('../models/companies'); // Importer le modèle

// Route pour récupérer les données de la collection Leo-and-go
router.get('/cars', async (req, res) => {
  try {
    // const companiesData = await company.find({}); // Utiliser le modèle pour récupérer les données
    // console.log("Voici les résultats : ");
    // console.log(JSON.stringify(companiesData, null, 2)); // Utiliser JSON.stringify pour afficher les données avec indentation
    // res.json(companiesData);
    const db = mongoose.connection.db;
    const companiesData = await db.collection('companies').find({}).toArray(); //Leo-and-go
    console.log(companiesData); //console.log(JSON.stringify(companiesData, null, 2)); //en détail
    res.json(companiesData);
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des données.' });
  }
}); 

module.exports = router;
