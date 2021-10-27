const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        required: [true, 'email is required']
      },
      password: {
        type: String,
        required: [true, 'password is required']
      },
      token:{
        type:String
      }
})



module.exports = mongoose.model('users',userSchema)
