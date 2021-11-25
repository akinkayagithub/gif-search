//Require Libraries
const { response } = require('express');
const express = require('express');
const exphbs = require('express-handlebars');
const Tenor = require("tenorjs").client({
    // Replace with your own key
    "Key": "EKMC0ARQC7YY", // https://tenor.com/developer/keyregistration
    "Filter": "high", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
});


//App Setup
const app = express();

//Middleware
const hbs = exphbs.create({
    defaultLayout: 'main',
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Handle the home page when we haven't queried yet
    term = ""
    if (req.query.term) {
        term = req.query.term
    }
    // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
    Tenor.Search.Query(term, "10")
        .then(response => {
            // store the gifs we get back from the search
            const gifs = response;
            // pass the gifs as an object into the home page
            res.render('home', { gifs })
        }).catch(console.error);
  });

//Start server
const port = 3000;

app.listen(port, () =>{
    console.log(`Giffy App listening on port localhost: ${port}!`);
});