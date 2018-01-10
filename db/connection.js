const mongoose = require('./models/routine_schema')

mongoose.Promise = Promise

const mongoUri = 'mongodb://localhost/routines'

if (process.env.NODE_ENV == "production") {
  mongoose
    .connect(process.env.MLAB_URL)
    .then(connection => console.log(`Established connection to database '${connection.db.databaseName}'`))
    .catch(connectionError => console.log('Database connection failed!', connectionError))
} else {
  mongoose
    .connect(mongoUri, { useMongoClient: true })
    .then(connection => console.log(`Connected development database '${connection.db.databaseName}'`))
    .catch(connectionError => console.log('Development database has failed!', connectionError))
}

module.exports = mongoose //because we're importing a connected mongoose instance into our `seed.js`