const Todo = require('../models/Todo');
const TodoGroup = require('../../todogroup/models/TodoGroup');

class TodoController {
  async createTodo(req, res) {
    try {
      const { title, todoGroupId } = req.body;
      const todoGroup = await TodoGroup.findById(todoGroupId);
      if (!todoGroup) {
        res.status(400).json({ error: 'Invalid TodoGroup ID' });
        return;
      }
      const newTodo = new Todo({ title, todoGroupId });
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllTodos(req, res) {
    try {
      const { todoGroupId } = req.params;
      const todoGroup = await TodoGroup.findById(todoGroupId);
      if (!todoGroup) {
        res.status(400).json({ error: 'Invalid TodoGroup ID' });
        return;
      }
      const todos = await Todo.find({ todoGroupId });
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = { TodoController };
