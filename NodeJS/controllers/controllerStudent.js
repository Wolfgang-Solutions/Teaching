const express = require('express');
var router = express.Router();

var { Student } = require('../models/student');
const { json } = require('body-parser');
const e = require('express');
const { isValidObjectId } = require('mongoose');
router.get('/', (req, res)=>{
    Student.find((err, docs)=>{
        if(!err) { res.send(docs); }
        else { console.log('Error in retreiving student details: ' + JSON.stringify(err, undefined, 2)); }
    })
});

router.get('/:id', (req, res) =>{
    if(!isValidObjectId(req.params.id))
        return res.status(400).send('No record with given id: ${req.params.id}');
});

router.get('/', (req, res)=>{
    Student.find((err, docs)=>{
        if(!err) { res.send(docs) }
        else { console.log('Error in retreiving Students. ' + JSON.stringify(err, undefined, 2)); }
    })
})

router.post('/', (req, res)=>{
    var stud = new Student({
        name: req.body.name,
        mid_name :  req.body.mid_name,
        surname : req.body.surname,
        grade : req.body.grade,
        school : req.body.school,
        board : req.body.name,
        subscription : req.body.name,
        phone : req.body.name,
        email : req.body.name,
        parent_name: req.body.name,
        parent_surname : req.body.name,
        parent_phone: req.body.name,
        parent_email: req.body.name
    });
    stud.save((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in saving record: ' + JSON.stringify(err, undefined, 2)); }
    });
})

module.exports = router;

