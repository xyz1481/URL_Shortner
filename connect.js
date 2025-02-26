const mongoose = require('mongoose');

async function connectToMongoDB(url) { //we will pass url as parameter form index.js
  return mongoose.connect(url);
}

module.exports = {
  connectToMongoDB,
}