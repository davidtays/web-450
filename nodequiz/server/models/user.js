var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    //properties of user go here
});

const user = module.exports = mongoose.model('user', userSchema);

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    user.findById(query, callback);
}