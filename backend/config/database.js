const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_UR);
        console.log(`MongoDB Server Connected ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`MongoDB Server issue${error}`);
    }
}
module.exports = connectDB;