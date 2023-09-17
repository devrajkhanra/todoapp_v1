const express = require('express');
const { TodoController } = require('../controllers/todoControllers');

class TodoRoutes {
  constructor() {
    this.todoController = new TodoController();
    this.router = express.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.post('/', this.todoController.createTodo.bind(this.todoController));
    this.router.get('/:todoGroupId', this.todoController.getAllTodos.bind(this.todoController));
  }
}

module.exports = { TodoRoutes };
