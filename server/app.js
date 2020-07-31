const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// DB Config


// Connect to MongoDB


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

const plans = require('./routes/plans');
app.use("/plans",plans);

// const password = require('./routes/password');
// app.use("/password",password);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));