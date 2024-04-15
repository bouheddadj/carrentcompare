// ./models/companies

const mongoose = require('mongoose');

const companiesSchema = new mongoose.Schema({
    leo: [
        {
            name: String,
            prix: [{
                "1min": String,
                "30min": String,
                "1h": String,
                "2h": String,
                "3h": String,
                "6h": String,
                "9h": String,
                "1j": String,
                "2j": String,
                "3j": String,
                "4j": String,
                "5j": String,
                "6j": String,
                "7j": String,
                "8j": String,
                "9j": String,
                "10j": String,
                "11j": String,
                "12j": String,
                "13j": String,
                "14j": String
            }],
            cars: [{
                brand: String,
                model: String,
                type: String
            }]
        }
    ],
    citiz: [
        {
            "avec abo": [{
                type: String,
                hourly: Number,
                daily: Number,
                weekly: Number,
                subscription: String
            }],
            "sans abo": [{
                type: String,
                hourly: Number,
                daily: Number,
                weekly: Number,
                noSubscription: String
            }]
        }
    ]
});

const companies = mongoose.model('companies', companiesSchema);

module.exports = companies;
