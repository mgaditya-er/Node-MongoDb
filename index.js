const express = require('express');
const mongoose = require('mongoose');
const app = express();
const EmployeeRoute = require('./routes/EmployeeRoute');

const bodyParser = require('body-parser');
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://adityaghyar:1234@curddb.gc51nly.mongodb.net/?retryWrites=true&w=majority");

// Event handlers for Mongoose connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

// Start the Express server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use('/employee',EmployeeRoute);
