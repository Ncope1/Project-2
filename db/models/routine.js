const mongoose = require('mongoose')

const RoutineSchema = new mongoose.Schema({
  title: String,
  category: String,
  duration: String,
  directions: String,
  products: Array
})

const Routine = mongoose.model('Routine', RoutineSchema)

module.exports = mongoose