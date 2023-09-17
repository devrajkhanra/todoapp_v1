const express = require('express');
const { TodoGroupController } = require('../controllers/todoGroupControllers');

class TodoGroupRoutes {
  constructor() {
    this.todoGroupController = new TodoGroupController();
    this.router = express.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.post('/', this.todoGroupController.createTodoGroup.bind(this.todoGroupController));
    this.router.get('/', this.todoGroupController.getAllTodoGroups.bind(this.todoGroupController));
  }
}

module.exports = { TodoGroupRoutes };
