const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
require('./config/mongoose.config');

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
//Middleware add cookies
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

require('./routes/product.routes')(app);
require('./routes/user.routes')(app);
require('./routes/order.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});