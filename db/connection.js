const mongoose = require('./models/routine_schema')

mongoose.Promise = Promise

const mongoUri = 'mongodb://localhost/routines'

mongoose
  .connect(mongoUri, {useMongoClient: true})
  .then(connection => console.log(`Connection established to db '${connection.db.databaseName}'`))
  .catch(connectionError => console.log('Connection failed!', connectionError))

  module.exports = mongoose //because we're importing a connected mongoose instance into our `seed.js`