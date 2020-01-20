const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    defination: String,
    count: Number
})

const Random = mongoose.model('Random', UserSchema)

module.exports = Random