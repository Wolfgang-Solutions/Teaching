const express = require('express');
const router = express.Router();

router.get('/tutors', (req, res, next)=> {
    res.send('Retrieving the constact list');
});

/*router.get('/students', (res, req, next)=>{
    res.send('Retrieving student contact list')
});*/

module.exports = router;