const mongoose = require('./connection')
const seeds   = require('./seedData.json')

const Routine = mongoose.model('Routine')

mongoose.Promise = Promise

Routine.remove({}).then(_ => {
  console.log('Dropped the DB')
  Routine.collection.insert(seeds).then(seedData => {
    console.log(seedData)
    mongoose.connection.close()
  })
})