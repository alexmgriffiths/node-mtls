const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Boo!");
});

app.get('/ping', async (req, res) => {
    const fs = require('fs');
    const https = require('https');
    const axios = require("axios");
    const httpsAgent = new https.Agent({
        cert: fs.readFileSync('../certs/client.crt'),
        key: fs.readFileSync('../certs/client.key'),
        ca: fs.readFileSync('../certs/ca.crt'),
    });
    const result = await axios.get('https://localhost:443/ping', { httpsAgent });
    res.status(200).send(result.data);
});

app.listen(5000, () => {
    console.log("App is listening on port 5000");
})