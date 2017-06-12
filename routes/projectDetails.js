var express = require('express');
var router = express.Router();

var projects = require('../Schema/project.js');

/* Get all projects details */
router.get('/', function(req, res, next) {
  projects.find(function (err, projects) {
    if (err) return next(err);
	if(!projects)
		res.json({message : 'No records found'});
    else
		res.json(projects);
  });
});

/* Get specific projects details */
router.get('tasks/:id/read', function(req, res, next) {
  projects.findById(req.params.id, function (err, projects) {
    if (err) return next(err);
    if(!employee)
		res.json({message : 'No details found for the Employee'});
    else
		res.json(employee);
  });
});

/* Create new Employee entry */
router.post('/', function(req, res, next) {
  projects.create(req.body, function (err, projects) {
    console.log("req.body :" + req.body.name);
    if (err) return next(err);
    res.json({message : 'Projects record added Successfully'});
  });
});

/* Update existing Employee entry */
router.put('/:id', function(req, res, next) {
  projects.findOneAndUpdate({_id : req.body._id}, req.body, function (err, projects) {
    if (err) return next(err);
    res.json({message : 'Employee record updated Successfully'});
  });
});

/* Delete an Employee entry */
router.delete('tasks/:id/delete_emp', function(req, res, next) {
  projects.findByIdAndRemove(req.params.id, function (err, projects) {
    if (err) return next(err);
    res.json({message : 'Employee record deleted Successfully'});
  });
});

module.exports = router;