const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Server Connected `);
    } catch (error) {
        console.log(`MongoDB Server issue${error}`);
    }
}
module.exports = connectDB;