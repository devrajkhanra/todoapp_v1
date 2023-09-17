const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

module.exports = { connectToDatabase };
