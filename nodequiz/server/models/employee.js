var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    //properties of employee go here
    employeeId: String
});

const employee = module.exports = mongoose.model('Employee', employeeSchema);

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    employee.findById(query, callback);
}