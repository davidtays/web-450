var mongoose = require('mongoose');

var quizSchema = new mongoose.Schema({
    //properties of quiz go here
});

const quiz = module.exports = mongoose.model('quiz', quizSchema);

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    quiz.findById(query, callback);
}