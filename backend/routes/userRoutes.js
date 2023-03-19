const express = require('express');
const { login, register } = require('../controllers/userControllers');

// router object
const userRoute = express.Router()

// routes
// REGISTER || POST
userRoute.post('/register', register)

// LOGIN || POST
userRoute.post('/login', login )

module.exports = userRoute;