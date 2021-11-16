//Require Libraries
const express = require('express');

//App Setup
const app = express();

//Middleware

//Routes
app.get('/', (req, res) => {
    res.send('Hello Squirrel');
});

//Start server
const port = 3000;

app.listen(port, () =>{
    console.log('Giffy working');
});