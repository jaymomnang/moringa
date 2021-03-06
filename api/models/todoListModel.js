
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  taskid: {
    type: String,
    Required: 'Kindly enter the taskId'
  },
  email: {
    type: String,
    Required: 'Kindly enter your email address'
  },
  firstname: {
    type: String,
    Required: 'Kindly enter your first name'
  },
  lastname: {
    type: String,
    Required: 'Kindly enter your last name'
  },
  
  description: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  courses: {
    course: {
      type: String,
      Required: 'Kindly enter the course code'
    },
    description: {
      type: String,
      Required: 'Kindly enter the course description'
    },
    gradepoint: {
      type: Number
    }
  },
  DueDate: {
    type: Date,
    default: Date.now
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
