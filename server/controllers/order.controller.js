const { Order } = require('../models/order.model');
const { User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const createOrder = async (req,res) => {
    // verify usertoken to get the user ID
    const { usertoken } = req.cookies;
    const decoded = jwt.verify(usertoken, SECRET_KEY);

  try{
        const newOrder =  await Order.create({
            user: decoded._id,
            products: [],
            status: "En proceso",
            isFavorite: false,
            ...req.body});
        const ordertoken = jwt.sign({_id:newOrder._id}, SECRET_KEY);
        //add order to user
        const usuario = await User.findOneAndUpdate({_id: decoded._id}, {orderId: newOrder._id});
        res.status(201)
        .cookie('ordertoken', ordertoken, {httpOnly: true, expires: new Date(Date.now()+900000)})
        .json({successMessage: "New order", order: newOrder, user: usuario})
    }
    catch(err){
        res.status(400)
        .json(err)
    }
}

module.exports.createOrder = createOrder;

module.exports.getOrder = async (req, res) => {
    try{
    const { ordertoken } = req.cookies;
        //console.log("ordertoken", ordertoken);
    
    const decoded = jwt.verify(ordertoken, SECRET_KEY);
  
      const order = await Order.findOne({_id: decoded._id});
      res.status(201)
      .json({
        successMessage: "Order encontrado",
        order: order
      })
    }
    catch(err){
      res.status(400).json({
        error: err
      })
    }
  }

module.exports.getAllOrders = async (request, response) => {
    const { usertoken } = request.cookies;
    const decoded = jwt.verify(usertoken, SECRET_KEY);

    try{
    const orders = await Order.find({user: decoded._id});
    response.status(201)
    .json({
        successMessage: "Ordenes encontradas",
        orders: orders
      })}
    catch(err){
        response.status(400).json(err)
    }
}

module.exports.addProduct = async (req, res) => {
    const { ordertoken } = req.cookies;
    console.log("ordertoken", ordertoken);
    if(ordertoken) {
        const decoded = jwt.verify(ordertoken, SECRET_KEY);
  
        try{
        const order = await Order.findOneAndUpdate({_id: decoded._id}, {$push: {products: {$each: req.body.products}}});
        res.status(201)
        .json({
            successMessage: "Order actualizado",
            order: order
        })
        }
        catch(err){
        res.status(400).json({
            error: err
        })
        }
    }
    else{
        const newOrder = createOrder(req,res)
        console.log("new order", newOrder)
    }
    
  }

  module.exports.archive = async (req, res) => {
    try{
    const { ordertoken } = req.cookies;
    const { usertoken } = req.cookies;

    if(ordertoken) {
        const decoded = jwt.verify(ordertoken, SECRET_KEY);
        const decodedUser = jwt.verify(usertoken, SECRET_KEY);
  
        const order = await Order.findOneAndUpdate({_id: decoded._id}, {status: "Finalizada"});
        const user = await User.findOneAndUpdate({_id: decodedUser._id}, { $unset: {orderId: ""} });
        console.log("en archive user", user)

        res.clearCookie('ordertoken');
        res.status(201)
        .json({
            successMessage: "Order actualizado",
            order: order,
            user: user
        })
        }
        
    }catch(err){
        res.status(400).json({
            error: err
        })
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
