var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var filmsSchema = new Schema({
	name : {type: String, require: true},
	description : {type: String, require: true},
	poster : {type: String, require: true},
	url : {type: String, require: true},
})
module.exports = mongoose.model('Film',filmsSchema)