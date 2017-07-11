
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GradeSchema = new Schema({
  email: {
    type: String,
    Required: 'Kindly enter the email address'
  },
  fullname: {
    type: String,
    Required: 'Kindly enter the your fullname'
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
    grade_point: {
      type: Number
    },
    AttendancePoint: {
      type: Number
    }
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Grades', GradeSchema);
