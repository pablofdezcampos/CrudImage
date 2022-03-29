const express = require('express');
const port = process.env.port || 8080;
const { urlencoded, json } = require('express');
const path = require('path');
const cors = require('cors');
const exp = require('constants');

//Inizialization
const app = express();

//Setting  Port
app.set('port', port);

//Middleware
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

//Routes
app.use('/shirts', require('./routes/shirts.routes'));

//Public static files
app.use(express.static(path.join(__dirname, '../static/')));

module.exports = app;