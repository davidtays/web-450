var Employee = require('../models/employee');
var Quiz = require('../models/quiz');
var Quizzes = require('../models/quizzes');
var User = require('../models/user');
var config = require('../helpers/config');


exports.employee_login = function(req, res, next){
  //console.log(req);
  console.log(req.body.employeeId + " = req.body.employeeId");

  Employee.getById(req.body.employeeId, function(err, employee){
    
    console.log(employee + ' = employee');
    res.json(employee);
    res.json(req.employeeId);
    if(err) return res.status(500).send('there was a problem finding the user 1st if in homeController');
    if(!employee.employeeId) return res.status(404).send('No employeeId found from 2nd if');
    res.status(200)//.send(employeeId);
  })
};

exports.get_quiz = function(req, res, next) {
  console.log(req + " = req");
  
  Quiz.getById(req.body.quizId, function(err, quiz){
    
    console.log(req.body.quizId + " = quiz");
    console.log(quiz.title + " = quizzes")
    
    if(err) return next(err);
    res.json(quiz);
  })
};

exports.get_all_users = function(req, res, next) {
  console.log(req + "= req from get_user");
  User.getById(req.body.userId, function(err, allUserResults){

    console.log(req.body.userId + "= req.body.userId get_all_users get_user");
    console.log(allUserResults + " = allUserResults")
    if(err) return next(err);
    res.json(allUserResults);

  })
};

exports.update_user_results = function(req, res, next) {
  console.log(req + "=req from update_user_results");
  console.log(req.body.user + "= req.body.user from update_user_results");
  User.saveResults(req.body.user, function(err, user){
    if(err) return next(err);

  })
  
  res.json("update USER works!")
};

exports.index = function(req, res, next) {
  res.json("Home Controller works!")
};


