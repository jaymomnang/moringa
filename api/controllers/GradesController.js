'use strict';
var mongoose = require('mongoose'),
  Grade = mongoose.model('Grades');

exports.list_all_grades = function(req, res) {
  Grade.find({}, function(err, grade) {
    if (err)
      res.send(err);
    res.json(grade);
  });
};

exports.create_a_grade = function(req, res) {
  var new_grade = new Grade(req.body);
  new_grade.save(function(err, grade) {
    if (err)
      res.send(err);
    res.json(grade);
  });
};

exports.read_a_grade = function(req, res) {
  Grade.findById(req.params.grade, function(err, grade) {
    if (err)
      res.send(err);
    res.json(grade);
  });
};

exports.update_a_grade = function(req, res) {
  Grade.findOneAndUpdate({_id: req.params.grade}, req.body, {new: true}, function(err, grade) {
    if (err)
      res.send(err);
    res.json(grade);
  });
};

exports.delete_a_grade = function(req, res) {
  Grade.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'grade successfully deactivated' });
  });
};
