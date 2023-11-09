const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

// API endpoint to get all currencies
app.get('/getAllCurrencies', async (req, res) => {
    // URL for retrieving currency names
    const nameURL = `https://openexchangerates.org/api/currencies.json?app_id=e0336faf0827409c8adb47f7a69838d3`;  

    try {
        // Retrieve currency names from the API
        const namesResponce = await axios.get(nameURL);
        const nameData = namesResponce.data;

        // Return the currency names as a JSON response
        return res.json(nameData);
    } catch (error) {
        console.error(error);
    }
})

// API endpoint to convert currencies
app.get('/convert', async (req, res) => {
    const {
        date,
        sourceCurrency,
        targetCurrency,
        amountInSourceCurrency
    } = req.query;

    try{
        // URL for retrieving historical exchange rates
        const dataUrl = `https://openexchangerates.org/api/historical/${date}.json?app_id=e0336faf0827409c8adb47f7a69838d3`;
        const dataResponce = await axios.get(dataUrl);
        const rates = dataResponce.data.rates;

        const sourceRate = rates[sourceCurrency];
        const targetRate = rates[targetCurrency];

        // Perform currency conversion
        const targetAmount = (targetRate / sourceRate) * amountInSourceCurrency;

        // Return the converted amount as a JSON response
        return res.json(targetAmount.toFixed(2));
    }
    catch(error){
        console.log(error);
    }

})

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})