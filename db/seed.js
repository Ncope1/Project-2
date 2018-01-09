const mongoose = require('./connection')
const seeds   = require('./seedData.json')

const Routine = mongoose.model('Routine', RoutineSchema)

mongoose.Promise = Promise

Routine.remove({}).then(_ => {
  console.log('Dropped the DB')
  Routine.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries)
    mongoose.connection.close()
  })
})