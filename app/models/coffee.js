var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	Name: String,
	Description: String,
	Size: [{
		Size: String,
		Price: Number
	}]
	
});

module.exports = mongoose.model('Coffee', coffeeSchema);