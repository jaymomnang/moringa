
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  email: {
    type: String,
    Required: 'Kindly enter your email address'
  },
  pwd: {
    type: String,
    Required: 'Kindly enter your password'
  },
  firstname: {
    type: String,
    Required: 'Kindly enter your first name'
  },
  lastname: {
    type: String,
    Required: 'Kindly enter your last name'
  },
  sl: {
    type: String,
    default: '0000001'
  },
  DateCreated: {
    type: Date,
    default: Date.now
  },
  lastLoginDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['active', 'inactive', 'suspended']
    }],
    default: ['inactive']
  }
});

module.exports = mongoose.model('Users', UserSchema);
