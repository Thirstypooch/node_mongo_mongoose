const Mongoose = require('mongoose')
const validator = require('validator')

Mongoose.connect(`mongodb://localhost:27017/testdb`).then(() => {

}).catch((err) => {

})

// User Model ORM
const userSchema = new Mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: (value) => {
      return validator.isEmail(value)
    },
  },
  firstName: {
    type: String,
    required: true,
  },
})

// creating a model
const User = Mongoose.model('Email', userSchema)

const user = new User({
  email: 'bono@mail.com',
  firstName: 'Bon-o-Bon',
})

user
  .save()
  .then((doc) => {
    console.log(doc)
  })
  .catch((err) => {
    console.log(err)
  })
  
  User.find({
    email: 'bono@mail.com'
  }).then(doc => {
    console.log(doc);
  })