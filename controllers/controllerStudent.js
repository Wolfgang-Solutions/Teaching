const express = require('express');
var router = express.Router();

var { Student } = require('../models/student');
const { json } = require('body-parser');
router.get('/', (req, res)=>{
    Student.find((err, docs)=>{
        if(!err) { res.send(docs); }
        else { console.log('Error in retreiving student details: ' + JSON.stringify(err, undefined, 2)); }
    })
});

module.exports = router;

