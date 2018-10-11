var Employee = require('../models/employee');
var config = require('../helpers/config');


exports.employee_login = function(req, res){
  Employee.getOne(req.employeeId, function(err, user){
    console.log(employeeId + ' = employeeId' + user + ' = user');
  });
}

exports.index = function(req, res, next) {
  res.json("Home Controller works!")
};


