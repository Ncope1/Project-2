const mongoose = require('mongoose')

const RoutineSchema = new mongoose.Schema({
  title: String,
  products: Array,
  duration: String,
  directions: String
  
})

const Routine = mongoose.model('Routine', RoutineSchema)

module.exports = mongoose