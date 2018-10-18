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
    User.find(query, callback);
}

module.exports.updateById = (userDoc, callback) => {
    var query = {userDoc};
    console.log(id + '= id from the user model')
    User.insertOne(query, callback);
}