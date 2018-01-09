const mongoose = require(mongoose)


var CollectionSchema = new mongoose.Schema({
    name: String,
    routines: String,
    origindate: Date
});


module.exports = mongoose