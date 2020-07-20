const express = require('express');
const router = express.Router();

const Tutor = require('../models/tutors');
const tutors = require('../models/tutors');

//retrieving tutor contact details
router.get('/tutors', (req, res, next)=> {
    Tutor.find(function(err, tutors) 
    {
        res.json(tutors);
    });
});

//adding tutor
router.post('tutor', (req, res, next)=> {
    //logic to add contact
    await db.collection('Teacher').insertOne({
        name: req.body.name,
        middle_name: req.body.middle_name,
        surname: req.body.surname,
        title: req.body.title,
        subject: req.body.subject,
        phone: req.body.phone,
        email: req.body.email,
        //password: req.body.password;
    });
});

//delete tutor
router.delete('/tutor/:id', (req, res, next)=>{
    //delete tutor
})

/*router.get('/students', (res, req, next)=>{
    res.send('Retrieving student contact list')
});*/

module.exports = router;