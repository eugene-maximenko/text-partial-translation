const path = require('path');
const express = require('express');
const textRouter = require('./routers/text')
const hbs = require('hbs');

const app = express();
app.use(express.json())
app.use(textRouter)
const port = process.env.PORT || 3000;

// Define pathes for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// // Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Listen ot port
app.listen(port, () => {
    console.log(`Server is up on ${port}.`);
});