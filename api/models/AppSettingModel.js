
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AppSettingSchema = new Schema({
  _settingId: {
    type: String,
    Required: 'Kindly enter your email address'
  },
  setting: {
    type: String,
    Required: 'Kindly enter your password'
  },
  description: {
    type: String,
    Required: 'Kindly enter your password'
  },
  value: {
    type: Number,
    Required: 'Kindly enter your first name'
  },
  valueString: {
    type: String,
    Required: 'Kindly enter your last name'
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('AppSetting', AppSettingSchema);
