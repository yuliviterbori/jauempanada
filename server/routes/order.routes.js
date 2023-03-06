const OrderController = require('../controllers/order.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = function(app){
    app.post('/api/order',authenticate, OrderController.createOrder);
    app.get('/api/order/all',authenticate, OrderController.getAllOrders);
    app.get('/api/order', authenticate, OrderController.getOrder);
    app.post('/api/order/addproduct', authenticate, OrderController.addProduct);
    app.post('/api/order/archive', authenticate, OrderController.archive);
    //app.get('/api/product/:id', OrderController.getOrder);
    //app.put('/api/product/:id', OrderController.updateOrder);
    //app.delete('/api/product/:id', OrderController.deleteOrder);
}