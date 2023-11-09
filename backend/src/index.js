const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/getAllCurrencies', async (req, res) => {
    const nameURL = `https://openexchangerates.org/api/currencies.json?app_id=e0336faf0827409c8adb47f7a69838d3`;  

    try {
        const namesResponce = await axios.get(nameURL);
        const nameData = namesResponce.data;

        return res.json(nameData);
    } catch (error) {
        console.error(error);
    }
})

app.get('/convert', async (req, res) => {
    const {
        date,
        sourceCurrency,
        targetCurrency,
        amountInSourceCurrency
    } = req.query;

    try{
        const dataUrl = `https://openexchangerates.org/api/historical/${date}.json?app_id=e0336faf0827409c8adb47f7a69838d3`;
        const dataResponce = await axios.get(dataUrl);
        const rates = dataResponce.data.rates;

        const sourceRate = rates[sourceCurrency];
        const targetRate = rates[targetCurrency];

        const targetAmount = (targetRate / sourceRate) * amountInSourceCurrency;

        return res.json(targetAmount.toFixed(2));
    }
    catch(error){
        console.log(error);
    }

})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})