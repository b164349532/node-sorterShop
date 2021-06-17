const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: String
}, { timestamps: true })

const User = mongoose.model('user' , Schema)

module.exports = User