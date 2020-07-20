//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./Routes/route')
//MongoDB connection
mongoose.connect('mongodb+srv://derek:trek6000@cluster0.megwb.mongodb.net/Teach?retryWrites=true&w=majority');
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @cloud')
});
mongoose.connection.on('err', ()=>{
    console.log('Failed to connect. Error:' + err);
});

//port no
const port = 3000;

//middleware
app.use(cors());

app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

//testing sever connection 
app.get('/', (req, res)=>{  //req = Request parameter res = Response Parameter
    res.send('Running');
});


app.listen(port,()=>{
    console.log('Server started at port:' + port);
});