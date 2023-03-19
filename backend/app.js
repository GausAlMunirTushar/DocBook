const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
// dotenv config 
dotenv.config();

// Connect to MongoDB
connectDB();

// Rest Object
const app = express();

// Middleware
app.use(cors)
app.use(express.json());
app.use(morgan('dev'));


// routes
app.use('/users', userRoutes)

module.exports = app;