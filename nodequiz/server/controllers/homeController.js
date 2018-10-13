var Employee = require('../models/employee');
var config = require('../helpers/config');


exports.employee_login = function(req, res){
  Employee.getById(req.employeeId, function(err, employeeId){
    console.log(employeeId + ' = employeeId');
    console.log(res.employeeId + ' = employeeId');
    console.log(req.params.employeeId + ' = employeeId');
    
    /*res.json(req.employeeId);
    if(err) return res.status(500).send('there was a problem finding the user 1st if in homeController');
    if(!employeeId) return res.status(404).send('No employeeId found from 2nd if');
    res.status(200)//.send(employeeId);*/
  })
};

exports.index = function(req, res, next) {
  res.json("Home Controller works!")
};


