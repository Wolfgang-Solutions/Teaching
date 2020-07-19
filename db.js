
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://derek:trek6000@cluster0.megwb.mongodb.net/Teach?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = MongoClient
