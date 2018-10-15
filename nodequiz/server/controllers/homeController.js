var Employee = require('../models/employee');
var Quiz = require('../models/quiz');
var Quizzes = require('../models/quizzes');
var User = require('../models/employee');
var config = require('../helpers/config');


exports.employee_login = function(req, res, next){
  //console.log(req);
  console.log(req.body.employeeId + " = req.body.employeeId");

  Employee.getById(req.body.employeeId, function(err, employee){
    console.log(employee + ' = employee');
    if(err) return next(err);
    res.json(employee);
    /*console.log(employeeId + ' = employeeId');
    console.log(res.employeeId + ' = res.employeeId');
    console.log(req.params.employeeId + ' = req.params.employeeId');
    
    res.json(req.employeeId);
    if(err) return res.status(500).send('there was a problem finding the user 1st if in homeController');
    if(!employeeId) return res.status(404).send('No employeeId found from 2nd if');
    res.status(200)//.send(employeeId);*/
  })
};

exports.get_quiz = function(req, res, next) {
  console.log(req + " = req");
  
  Quiz.getById(req.body.quizId, function(err, quiz){
    
    console.log(req.body.quizId + " = quiz");
    console.log(quiz.title + " = quizzes")
    
    if(err) return next(err);
    res.json(quiz);
    console.log(res.json + ' is res.body from get_quiz in controller*****');
  })
};

exports.get_user = function(req, res, next) {
  res.json("get USER works!")
};

exports.index = function(req, res, next) {
  res.json("Home Controller works!")
};


