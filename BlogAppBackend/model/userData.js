const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password : String,
    phone : Number, 
    address : String
})
const userData = mongoose.model('userdetail', userSchema);
module.exports = userData;