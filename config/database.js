// configuration for database connection
const mongoose = require("mongoose");
require("dotenv").config();

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_uri);
        console.log("Connected to the DB succesfully");

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

// Export the connection function
module.exports = mongoose.connect;