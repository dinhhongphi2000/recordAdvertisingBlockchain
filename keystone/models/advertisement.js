var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var advertisementSchema = new Schema({
	description : {type: String, require: true},
	duration : {type: Number, require: true},
	producer : {type: String, require: true},
	url : {type: String, require: true}
})
module.exports = mongoose.model('advertisement',advertisementSchema)