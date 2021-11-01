const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

	name: {type: String, required: true},
	description: {type: String, required: true},
	price: {type: Number, required: true},
	material: {type: String, required: true},
	images: {type: Array, required: true},

}, {
	timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;