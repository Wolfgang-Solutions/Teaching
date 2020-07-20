var express = require('express');
var router = express.Router();
let Plans = require('../models/plan');
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true,
        useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

/* GET home page. */
router.get('/', (req,res) => {
  Plans.find()
  .then(Plans=>res.json(Plans))
  .catch(err => res.status(400).json('Error: '+err));
});

router.get('/test', (req,res) => {
  res.send('<p>Hello World</p>');
});

router.route('/create').post((req, res) => {
  const newPlan = new Plans({
      name: req.body.name,
      price: req.body.price
  });

  newPlan.save()
    .then(() => res.json('Plan added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
