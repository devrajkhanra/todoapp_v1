const mongoose = require('mongoose');

const todoGroupSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model('TodoGroup', todoGroupSchema);
