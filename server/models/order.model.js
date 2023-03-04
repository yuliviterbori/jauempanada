const mongoose = require('mongoose');

const opts = { toJSON: { virtuals: true } };

const ProductSchema = new mongoose.Schema({
    productId: {type: mongoose.Schema.ObjectId, ref: 'Product'},
    title: { type: String },
    price: { type: Number },
    quantity: {type: Number},
}, opts);
ProductSchema.virtual('subtotal')
.get(function() { return this.price * this.quantity } )

const OrderSchema = new mongoose.Schema({
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    products: {type: [ProductSchema]},
    status: {type: String},
    isFavorite: {type: Boolean},
}, { timestamps: true, ...opts });

OrderSchema.virtual('total')
.get( function() { return this.products.reduce((acc, curr)=>acc+(curr.subtotal), 0) })

module.exports.Order = mongoose.model('Order', OrderSchema, 'orders');