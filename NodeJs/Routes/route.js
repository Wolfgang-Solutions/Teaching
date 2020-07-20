const express = require('express');
const router = express.Router();

const Tutor = require('../models/tutors');

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
    let newTutor = new Tutor({
    //await db.collection('Teacher').insertOne({
        name: req.body.name,
        middle_name: req.body.middle_name,
        surname: req.body.surname,
        title: req.body.title,
        subject: req.body.subject,
        phone: req.body.phone,
        email: req.body.email,
        //password: req.body.password;   
    });
   

    newTutor.save((err, tutor)=>{
        if(!err)
        res.json({msg: 'New Tutor added successfully'});
        else
        res.json({msg: 'Failed to connect'});
    });
});

//delete tutor
router.delete('/tutor/:id', (req, res, next)=>{
    Tutor.remove({_id: req.params.id}, function(err, result){
         if(!err)
         res.json(result);
         else
         res.json(err);
    });
})

/*router.get('/students', (res, req, next)=>{
    res.send('Retrieving student contact list')
});*/

module.exports = router;