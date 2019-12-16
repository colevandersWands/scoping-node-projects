const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const filesRoutes = require('./files.js');
const logicRoutes = require('./logic.js');

const app = express();

// use cors & bodyParser

app.get('/', (req, res) => { res.send({ up: "and running" }) })

app.use('/files', filesRoutes); // restful-ish crud routes
app.use('/logic', logicRoutes); // call the functions

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('up and running on ' + PORT));
