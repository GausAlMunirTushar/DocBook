const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// dotenv config 
dotenv.config();

// Connect to MongoDB
connectDB();

// Rest Object
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));


// routes
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

// Port
const port = process.env.PORT || 8080;

// Listen Port
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})