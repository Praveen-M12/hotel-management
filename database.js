const mongoose = require('mongoose');

// Provide the complete connection string including hostname, username, password, and database name
// const mongoURL = process.env.MONGODB_URL;
const mongoURL = process.env.LOCAL_URL;

mongoose.connect(mongoURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;
