const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const FAQ = require("./models/FAQ");
const faqRoutes = require("./routes/faqRoutes");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
const app = express();

app.use(express.json());

// API Routes for FAQ
app.use("/api/faqs", faqRoutes);
app.use(errorHandler);

const startServer = async () => {
    try {
        await connectDB();
        const faqCount = await FAQ.countDocuments();
        if (faqCount === 0) {
            console.log("No FAQs found, seeding data...");
            await FAQ.seedFAQs();
        }

        // Start the server
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Error starting the server:", err);
        process.exit(1);
    }
};
startServer();
