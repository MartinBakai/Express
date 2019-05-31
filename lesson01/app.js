// Load modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const port = 3456;


//Create new server
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Serve static files
app.use(
    express.static(
        path.join(__dirname, 'public')
    )
);

//Get request
app.get('/', (req,res) => {
    let content = `
        <html>
            <head>
                <meta charset="utf8">
                <title>Static files</title>
                <link rel="stylesheet" href="main.css">
            </head>
            <body>
                <h1>Statikus fájlok</h1>
                <script src="main.js"></script>
                <form action="/postuser" method="post">
                    <label>Name</label>
                    <input name="fullName" type="text">
                    <br>
                    <label>Email</label>
                    <input name="userEmail" type="email">
                    <br>
                    <button type="submit">send</button>
                </form>
            </body>
        </html>`
    res.send(content);
});
app.all('/postuser', (req, res) => {
    let name = `
        <form action="/auth" method="post">
            <label>Name</label>
            <input name="Name" type="text">
            <br>
            <label>Password</label>
            <input name="Password" type="password">
            <br>
            <button type="submit">Login</button>
        </form>
    `
    res.send(name);
})

app.post('/postuser', (req,res) => {
    console.log(req.body);
    res.send('this is the post page');
})

//Listen port
app.listen(port, () => {
    console.log(`Server running on port: ${port}.`);
});

//Auth
app.all('/auth', (req, res) => {
    if (req.method == "POST"){
        console.log('access granted');
        res.send("Right url method");
    }else{
        res.send('Invalid request method');
    }
})