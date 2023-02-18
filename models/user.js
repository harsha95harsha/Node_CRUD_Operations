const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    DOB: String,
    email: String,
    city: String,
    country: String,
    pincode: Number

})

module.exports = mongoose.model('User', userSchema)