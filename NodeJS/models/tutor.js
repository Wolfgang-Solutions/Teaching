const MongoClient = require('MongoClient')

var Student = MongoClient.model('Teacher', {
    title: {type: String},
    name : {type: String},
    mid_name :  {type: String},
    surname : {type: String},
    start_grade : {type: Int32Array},
    end_grade : {type: Int32Array},
    board : {type: String},
    bio: {type: String},
    subscription : {type: String},
    phone : {type: Int32Array},
    email : {type: String},
});

module.exports = Student;

