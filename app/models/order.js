var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
	User: { type: Schema.Types.ObjectId, ref: "Users" },
	Date: { type: Date, default: Date.now },
	Pago: Number,
	Items: [{
		Coffee: { type: Schema.Types.ObjectId, ref: "Coffee" },
		Amount: Number,
		Size: String,
		Price: Number
	}],
	Latitude: Number,
	Longitude: Number 
});

module.exports = mongoose.model('Order', orderSchema);