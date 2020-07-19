const bodyParser = require('body-parser');
const express = require('express');

const { MongoClient } = require('./db');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started at port : 3000'));
