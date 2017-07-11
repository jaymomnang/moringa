'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/apenedb', { useMongoClient: true });
var Schema = mongoose.Schema;


var invoiceSchema = new Schema({
  invoice_id: {
    type: String,
    Required: 'Kindly enter the invoice item'
  },
  description: {
    type: String,
    Required: 'Kindly enter a description for the invoice'
  },
  customer: {
    _id: [{
      type: String,
      Required: ''
    }],
    _name:  [{
      type: String,
      Required: 'Kindly enter customer name'
    }],
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  items: {
    description:  [{
      type: String
    }],
    amount:  [{
      type: Number
    }],
    qty:  [{
      type: Number
    }],
    total:  [{
      type: Number
    }],
    discount:  [{
      type: Number,
    }],
    vat:  [{
      type: Number,
    }],
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'invoiced', 'paid']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('invoices', invoiceSchema);
