'use strict';
module.exports = function(app) {
  var invoice = require('../controllers/invoiceController');

  // todoList Routes
  app.route('/invoice')
    .get(invoice.list_all_invoices)
    .post(invoice.create_an_invoice);

  app.route('/invoice/:invoiceId')
    .get(invoice.get_an_invoice)
    .put(invoice.update_an_invoice)
    .delete(invoice.delete_an_invoice);
};
