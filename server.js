var express = require('express'),
  app = express(),
  port = process.env.PORT || 3100,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  User = require('./api/models/usersModel'),
  Course = require('./api/models/CoursesModel'),
  Attendance = require('./api/models/AttendanceModel'),
  Grade = require('./api/models/gradesModel'),
  //Course = require('./api/models/CoursesModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
const testdb = 'mongodb://localhost:27017/moringadb1';
const testdb2 = 'mongodb://localhost:27017/moringadb';
const livedb = 'mongodb://moringacore:savaud17++@cluster0-shard-00-00-gdatw.mongodb.net:27017,cluster0-shard-00-01-gdatw.mongodb.net:27017,cluster0-shard-00-02-gdatw.mongodb.net:27017/moringadb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
mongoose.connect(livedb);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/mcRoutes');
routes(app);

app.listen(port);
console.log('MoringaCore RESTful API server started on: ' + port);
