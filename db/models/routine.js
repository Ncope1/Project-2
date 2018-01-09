const mongoose = require('./connection')

const RoutineSchema = new mongoose.Schema({
  title: String,
  category: String,
  duration: String,
  directions: String,
  products: Array
})

const Routine = mongoose.model('Routine', RoutineSchema)

module.exports = Routine