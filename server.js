
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3100,
  mongoose = require('mongoose'),
  invoice = require('./api/models/invoiceModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/moringadb', { useMongoClient: true }, function(err, db){

  console.log("Successfully connected to database.");
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  var routes = require('./api/routes/invoiceRoutes');

  var router = express.Router();
  router.get('/', function(req, res) {
      res.send({ message: 'hooray! welcome to our api!' });
      res.json({ message: 'hooray! welcome to our api!' });
  });

  app.use('/api', router);
  routes(app);

  app.listen(port);
  console.log('Apene Accounting API server started on: ' + port);

});

//MongoClient.connect('mongodb://localhost:27017/video', function(err, db) {

//    assert.equal(null, err);
//    console.log("Successfully connected to MongoDB.");

//});
