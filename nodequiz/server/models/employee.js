var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    //properties of employee go here
    employeeId: String
});

const Employee = module.exports = mongoose.model('Employee', employeeSchema);

module.exports.getById = (id, callback) => {
    var query = {employeeId: id};
    Employee.findById(query, callback);
}