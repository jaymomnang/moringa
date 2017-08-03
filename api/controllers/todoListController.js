'use strict';
var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks'),
  Course = mongoose.model('Courses'),
  User = mongoose.model('Users');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
      res.json(task);
  });
};

//Create students tasks.
exports.create_task = function(req, res) {
  var new_task = new Task(req.body);

  var students = req.body.students;
  var i = 0;
  var _max = students.length;

  for (i == 0; i < _max; i++) {

    new_task.email = students[i];
    Course.find({course: new_task.courses.course}, function(err, course) {
      if (err) res.send(err);

      new_task.courses.description = course.description;
      new_task.courses.gradepoint = course.max_grade_point;

      User.findOne({email: new_task.email}, function(err, user){

        new_task.firstname = user.firstname;
        new_task.lastname = user.lastname;

        Task.findOne({}, 'taskid').sort({taskid: -1}).exec(function(err, data) {
          if (err) return err;
          //get the next attendance number and save
          var taskid = 'TSK0000000';
          if (data != null){
            taskid = data.taskid;
          }
          new_task.taskid = getNewtaskId(taskid);
          //console.log(new_task);
          new_task.save(function(err, task) {
            if (err) res.send(err);

            if (i+1 == _max){
              Task.find({}, function(err, task) {
                if (err) res.send(err);
                res.json(task);
              });
            }

          });

        });
      });
    });

  }
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

exports.removeall = function(req, res) {
  Task.remove({}, function(err, user) {
    if (err) res.send(err);
     res.json({ message: 'Tasks successfully removed' });
 });
};

//internally generated numbers for attendance records.
var getNewtaskId = function(currentID){
      var pos = Number(currentID.substring(3,10)) + 1;
      var nxt = "TSK000000";
      switch(pos.toString().length) {
          case 2:
              nxt = "TSK00000" + pos.toString();
              break;
          case 3:
              nxt = "TSK0000" + pos.toString();
              break;
          case 4:
              nxt = "TSK000" + pos.toString();
              break;
          case 5:
              nxt = "TSK00" + pos.toString();
              break;
          case 6:
              nxt = "TSK0" + pos.toString();
              break;
          case 7:
              nxt = "TSK" + pos.toString();
              break;
          default:
              nxt = nxt + pos.toString();
    }
    return nxt;
};
