'use strict';
var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks'),
  Course = mongoose.model('Courses');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
      res.json(task);
  });
};

exports.create_task = function(req, res) {
  var new_task = new Task(req.body);
  Course.find({course: new_task.courses.course}, function(err, course) {
    if (err) res.send(err);
    new_task.courses.description = course.description;
    new_task.courses.gradepoint = course.max_grade_point;
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
        res.json(task);
    });
  });

};

exports.get_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
      res.json(task);
  });
};

exports.update_task = function(req, res) {
  Task.findOneAndUpdate({taskid: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
      res.json(task);
  });
};

exports.delete_task = function(req, res) {
  Task.findOneAndUpdate({taskid: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
      res.json({ message: 'Task successfully deactivated' });
  });
};

exports.remove_task = function(req, res) {
  Task.remove({taskid: req.params.taskId}, function(err, user) {
    if (err) res.send(err);
     res.json({ message: 'Task successfully removed' });
 });
};
