var Employee = require('../models/employee');
var config = require('../helpers/config');


exports.employee_login = function(req, res){
  Employee.getById(req.employeeId, function(err, employees){
    console.log(employeeId + ' = employeeId' + employees + ' = employees');
    res.json(employeeId);
  })
};

exports.index = function(req, res, next) {
  res.json("Home Controller works!")
};


