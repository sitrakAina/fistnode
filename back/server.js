const express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./route/route');


app.listen(8080, function () {
  console.log('server demarer')
});

app.use('/', router)