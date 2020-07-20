const mongoose  = require('mongoose');

const contactSchema = mongoose.Schema({
    title: { type: String, required: false},
    name: { type: String, required: true }, 
    middle_name: { type: String, required: false },
    surname: { type: String, required: true },
    subject: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: password, required: true},
    phone: {type: Int32Array, required: true},
    bio: { type: String, required: true}
})

const Contact = module.exports = mongoose.model('Contact', contactSchema);