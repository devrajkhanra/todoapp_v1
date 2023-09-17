const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  todoGroupId: { type: mongoose.Schema.Types.ObjectId, ref: 'TodoGroup', required: true }
});

module.exports = mongoose.model('Todo', todoSchema);
