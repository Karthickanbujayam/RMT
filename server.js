var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');   
 
var db;
var app = express();
// load mongoose package
var mongoose = require('mongoose');
// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/RMT')
  .then(function() {console.log('connected to DB');
  })
  .catch(function(err) {console.error(err);
  });


var index = require('./routes/index');
var tasks = require('./routes/tasks');
var employee = require('./routes/employee');
var empUtilization = require('./routes/empUtilization');
var projectDetails = require('./routes/projectDetails');
var proUtilization = require('./routes/proUtilization');
/*
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var employee = require('./routes/employee');
var empUtilization = require('./routes/empUtilization');
var empDashboard = require('./routes/empDashboard');
var References= require('./routes/references');

*/

var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);
app.use('/api/employee', employee); 
app.use('/api/empUtilization', empUtilization);
app.use('/api/projectDetails', projectDetails);
app.use('/api/proUtilization', proUtilization);
/*app.use('/api/project', tasks);
app.use('/api/employee', employee);

app.use('/api/empDashboard', empDashboard);
app.use('/api/references', References);
*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

process.on('SIGINT', function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  mongoose.connection.close();
  process.exit( );
}); 
 
app.listen(port, function(){
    console.log('Server started on port '+port);
});
 
module.exports = app;
