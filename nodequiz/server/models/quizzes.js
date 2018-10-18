var mongoose = require('mongoose');
var userResultSchema = new mongoose.Schema({
    //properties of user go here
    userId: String,
    quizId: String,
    a1: String,
    a2: String,
    a3: String,
    a4: String,
    a5: String,
    a6: String,
    a7: String,
    a8: String,
    a9: String,
    a10: String,
    score: Number
});
var quizzesSchema = new mongoose.Schema({
    //properties of quiz go here
    quizzes: [userResultSchema]
    
})

const Quizzes = module.exports = mongoose.model('User', quizzesSchema);


module.exports.getById = (id, callback) => {
    var query = {userId: id};
    console.log(id + '= id from the quizzes model')
    Quizzes.find(query, callback);
}

module.exports.updateById = (id, callback) => {
    var query = {userId: id};
    console.log(id + '= id from the quizzes model')
    Quizzes.findById(query, callback);
}