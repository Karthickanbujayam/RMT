var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
//var db = mongojs('mongodb://dataio:dataio@ds161410.mlab.com:61410/dataio', ['employeeDetails']);
 

// Get All Tasks
router.get('/tasks', function(req, res, next){
    db.usersAuth.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

// Get Single Task
router.get('/task/:id', function(req, res, next){
    db.usersAuth.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

module.exports = router;