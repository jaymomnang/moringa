
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AttendanceSchema = new Schema({
  email: {
    type: String,
    Required: 'Kindly enter your email address'
  },
  fullname: {
    type: String,
    Required: 'Kindly enter your fullname'
  },
  a_date: {
    type: Date,
    deafult: Date.now
  },
  gradepoint: {
    type: Number
  }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
