const express = require('express');
const router = express.Router();

const authRoute = require('./auth');
const productRoute = require('./product');
const userRoute = require('./user');
const employeeRouter = require('./employee');
const  bookRouter = require('./book')

authRoute(router);
productRoute(router); 
userRoute(router);
employeeRouter(router);
bookRouter(router);

module.exports= router;