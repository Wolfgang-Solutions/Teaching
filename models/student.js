const MongoClient = require('MongoClient')

var Student = MongoClient.model('Student', {
    name : {type: String},
    mid_name :  {type: String},
    surname : {type: String},
    grade : {type: Int32Array},
    school : {type: String},
    board : {type: String},
    subscription : {type: String},
    phone : {type: Int32Array},
    email : {type: String},
    parent_name: {type: String},
    parent_surname : {type: String},
    parent_phone: {type: Int32Array},
    parent_email: {type: String}
});

module.exports = Student;

