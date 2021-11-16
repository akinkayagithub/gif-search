//Require Libraries
const express = require('express');
const exphbs = require('express-handlebars');

//App Setup
const app = express();

//Middleware
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));

var hbs = exphbs.create({
    defaultLayout: 'main',
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Routes
app.get('/', (req, res) => {
    // get url of gif
    const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245';

    // res.send('Hello Squirrel');
    res.render('hello-gif', {gifUrl});
});


app.get('/greetings/:name/', (req, res) => {
    const name = req.params.name;
    res.render('greetings', {name});
});

//Start server
const port = 3000;

app.listen(port, () =>{
    console.log(`Giffy App listening on port localhost: ${port}!`);
});