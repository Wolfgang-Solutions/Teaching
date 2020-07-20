const express = require('express');
const router = express.Router();

//retrieving tutor contacts
router.get('/tutors', (req, res, next)=> {
    res.send('Retrieving the constact list');
});

//adding tutor
router.post('tutor', (req, res, next)=> {
    //logic to add contact
    await db.collection('Teacher').insertOne({
        name: 'Thomas',
        middle_name: '',
        surname: 'Thomas',
        title: 'Dr',
        subject: ['Maths', 'Physics'],
        phone: 0123456789,
        email: 'thomasdr@hotmail.com',

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