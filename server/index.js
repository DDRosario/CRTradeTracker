const express = require('express');
const path = require('path');
const router = require('./routes.js');
const PORT = 1337;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../static')));

// app.use('/', router);

app.listen(PORT, err => {
  console.log('Server is listening to port: ', PORT);
});
