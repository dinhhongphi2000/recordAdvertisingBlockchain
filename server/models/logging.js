var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var loggingSchema = new Schema({
  agent: {type: String, required: true },
  ip: {type: String, required: true},
  duration: {type: Number, required: true},
  time: {type: Date, default: Date.now, required: true},
  advertisementId: {type: Schema.Types.ObjectId, required: true}
})
module.exports = mongoose.model('Logging', loggingSchema)