const TodoGroup = require('../models/TodoGroup');

class TodoGroupController {
  async createTodoGroup(req, res) {
    try {
      const { name } = req.body;
      const newTodoGroup = new TodoGroup({ name });
      await newTodoGroup.save();
      res.status(201).json(newTodoGroup);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllTodoGroups(req, res) {
    try {
      const todoGroups = await TodoGroup.find();
      res.status(200).json(todoGroups);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = { TodoGroupController };
