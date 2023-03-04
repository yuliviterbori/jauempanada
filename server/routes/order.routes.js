const OrderController = require('../controllers/order.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = function(app){
    app.post('/api/order', OrderController.createOrder);
    app.get('/api/order', OrderController.getAllOrders);
    //app.get('/api/product/:id', OrderController.getOrder);
    //app.put('/api/product/:id', OrderController.updateOrder);
    //app.delete('/api/product/:id', OrderController.deleteOrder);
}