const { Order } = require('../models/order.model');

module.exports.createOrder = (req,res) => {
    Order.create(req.body)
    .then(pro => res.json(pro))
    .catch(err => res.json(err))
}

module.exports.getAllOrders = async (request, response) => {
    try{
    const orders = await Order.find({})
    const first = orders[0]
    console.log("first total", first)
    //console.log("orders", orders);
    response.status(201)
    .json(orders)}
    catch(err){
        response.status(400).json(err)
    }
}

module.exports.getProduct = (request, response) => {
    Order.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
    Order.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Order.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
