'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');
  var user = require('../controllers/userController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  // Users Routes
  app.route('/login')
    .get(user.get_users)
    .post(user.add_new_user);

  app.route('/login/:email/:pwd')
    .get(user.authenticate)
    .put(user.update_user_prof)
    .delete(user.delete_user);
};
