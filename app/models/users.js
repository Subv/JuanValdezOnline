var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	Username: String,
	Name: String,
	LastName: String,
	Password: String,
	Card: Number,
	Points: { type: Number, default: 0 },
	RegisterDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users', usersSchema);