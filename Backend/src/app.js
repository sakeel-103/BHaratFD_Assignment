const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const faqRoutes = require('./routes/faqRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/faqs', faqRoutes);
app.use(errorHandler);
const startServer = async () => {
    try {
        await connectDB();
        console.log('Database connected');
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    }
};

startServer();

module.exports = app;
