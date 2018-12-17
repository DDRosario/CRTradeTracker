const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/clashroyale');

const db = mongoose.connection;

db.on('error', err => {
  console.log('An error occured: ', err);
});

db.once('connect', () => {
  console.log('Mongoose successfully connected!');
});

module.exports = db;
