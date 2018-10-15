var mongoose = require('mongoose');

var quizSchema = new mongoose.Schema({
    //properties of quiz go here
        quizId: String,
        title: String,
        questions: [
            {
                question: String,
                correct: Number,
                answers: [
                    {a1: String},
                    {a2: String},
                    {a3: String},
                    {a4: String}
                ]
            },
            {
                question: String,
                correct: Number,
                answers: [
                    {a1: String},
                    {a2: String},
                    {a3: String},
                    {a4: String}
                ]
            },
            {
                question: String,
                correct: Number,
                answers: [
                    {a1: String},
                    {a2: String},
                    {a3: String},
                    {a4: String}
                ]
            },
            {
                question: String,
                correct: Number,
                answers: [
                    {a1: String},
                    {a2: String},
                    {a3: String},
                    {a4: String}
                ]
            },
            {
                question: String,
                correct: Number,
                answers: [
                    {a1: String},
                    {a2: String},
                    {a3: String},
                    {a4: String}
                ]
            },
            {
                question: String,
                correct: Number,
                answers: [
                    {a1: String},
                    {a2: String},
                    {a3: String},
                    {a4: String}
                ]
            },
            {
                question: String,
                answers: [
                    {a1: String},
                    {a2: String},
                    {a3: String},
                    {a4: String}
                ]
            },
            {
                question: String,
                correct: Number,
                answers: [
                    {a1: String},
                    {a2: String},
                    {a3: String},
                    {a4: String}
                ]
            },
            {
                question: String,
                correct: Number,
                answers: [
                    {a1: String},
                    {a2: String},
                    {a3: String},
                    {a4: String}
                ]
            },
            {
                question: String,
                correct: Number,
                answers: [
                    {a1: String},
                    {a2: String},
                    {a3: String},
                    {a4: String}
                ]
            }
        ],
        filename: String
}, { collection: 'quiz'});
const Quiz = module.exports = mongoose.model('Quiz', quizSchema);

module.exports.getById = (id, callback) => {
    var query = {quizId: id};
    console.log(id + '= id from the quiz model')
    Quiz.findOne(query, callback);
}