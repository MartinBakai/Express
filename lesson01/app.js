// Load modules
const express = require('express');
const port = 3456;
//Create new server

const app = express();

//Get request
app.get('/', (req,res) => {
    res.send('Hello Express');
});

//Listen port
app.listen(port, () => {
    console.log(`Server running on port: ${port}.`);
});