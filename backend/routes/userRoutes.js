const express = require('express');
const { login, register, authController } = require('../controllers/userControllers');
const authMiddleware = require('../middlewares/authMiddleware');

// router object
const userRoute = express.Router()

// routes
// REGISTER || POST
userRoute.post('/register', register)

// LOGIN || POST
userRoute.post('/login', login )
// AUTH || POST
userRoute.post('/getUserData', authMiddleware, authController )


module.exports = userRoute;