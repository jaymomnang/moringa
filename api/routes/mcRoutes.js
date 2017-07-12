'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');
  var user = require('../controllers/userController');
  var course = require('../controllers/CoursesController');
  var grade = require('../controllers/GradesController');
  var attendance = require('../controllers/AttendanceController');

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

  // Courses Routes
  app.route('/course')
    .get(course.list_all_courses)
    .post(course.create_a_course);

  app.route('/course/:course')
    .get(course.read_a_course)
    .put(course.update_a_course)
    .delete(course.delete_a_course);

  // Grades Routes
  app.route('/grades')
    .get(course.list_all_courses)
    .post(course.create_a_course);

  app.route('/login/:email')
    .get(course.read_a_course)
    .put(course.update_a_course)
    .delete(course.delete_a_course);

  // Attendance Routes
  app.route('/login')
    .get(user.get_users)
    .post(user.add_new_user);

  app.route('/login/:email/:pwd')
    .get(user.authenticate)
    .put(user.update_user_prof)
    .delete(user.delete_user);
};
