const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
})

const user = mongoose.model('user', userSchema)
module.exports = user
