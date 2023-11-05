const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/getAllCurrencies', async (req, res) => {
    const nameURL = `https://openexchangerates.org/api/currencies.json?app_id=e0336faf0827409c8adb47f7a69838d3`;  

    try {
        const namesResponse = await axios.get(nameURL);
        const nameData = namesResponse.data;

        return res.json(nameData);
    } catch (error) {
        console.log(error);
    }
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})