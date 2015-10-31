var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var coffeeSchema = new Schema({
    Name: String,
    Description: String,
    Sizes: [{
        Name: String,
        Price: Number
    }]
});

module.exports = mongoose.model('Coffee', coffeeSchema);
