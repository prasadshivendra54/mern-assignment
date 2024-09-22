
// 4th Question - MongoDB: Create a MongoDB schema for storing user data (name, email, age), and write a script to insert a new user into the collection.

// Here is code👇

const mongoose = require("mongoose") // import mongoose

// Connection to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true }
});

// Create a User model
const User = mongoose.model('User', userSchema);

module.exports = User;
