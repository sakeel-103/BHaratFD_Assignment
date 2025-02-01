const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Ensure MONGO_URI is provided
        if (!process.env.MONGO_URI) {
            console.error('MONGO_URI environment variable is not set.');
            process.exit(1);
        }

        // MongoDB connection options (updated for Mongoose 6.x and beyond)
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI, options);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err.message || err);
        process.exit(1);
    }
};

module.exports = connectDB;
