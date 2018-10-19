var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    //properties of quiz go here
    userId: String,
    quizId: String,
    quizName: String,
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
    
}, {collection: 'user'});


const User = module.exports = mongoose.model('user', userSchema);

module.exports.getById = (id, callback) => {
    var query = {userId: id};
    console.log(id + '= id from the user model')
    User.find(callback);
}

module.exports.saveResults = (userDoc, callback) => {
    var doc = new User(userDoc);
    console.log(userDoc.userId + '= userId from the user model')
    doc.save(function (err) {
        if (err) return handleError(err);});
      
}