var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    //properties of user go here
    userId: String,
    quizzes : [
        {
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
            score: String
        }
    ]
});

const user = module.exports = mongoose.model('user', userSchema);

module.exports.getById = (id, callback) => {
    var query = {userId: id};
    user.findById(query, callback);
}