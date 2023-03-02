const ProductController = require('../controllers/product.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = function(app){
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product',authenticate, ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}