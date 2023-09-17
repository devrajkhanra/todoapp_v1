const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/database')
const { TodoRoutes } = require('./features/todo/routes/todoRoutes');
const { TodoGroupRoutes } = require('./features/todogroup/routes/todoGroupRoutes');

const app = express();
const port = process.env.PORT || 3000;

db.connectToDatabase()

app.use(cors());
app.use(bodyParser.json());

// Routes
const todoRoutes = new TodoRoutes();
app.use('/api/todo', todoRoutes.router);

const todoGroupRoutes = new TodoGroupRoutes();
app.use('/api/todoGroups', todoGroupRoutes.router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
