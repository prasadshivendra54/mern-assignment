const mongoose = require('mongoose');
const User = require('./index');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Function to insert a new user or userData
const insertUser = async (name, email, age) => {
    const user = new User({ name, email, age });

    try {
        const savedUser = await user.save();
        console.log('User saved:', savedUser);
    } catch (err) {
        console.error('Error saving user:', err);
    } finally {
        mongoose.connection.close();
    }
};

// Insert a new user
insertUser('Shivendra Kacher', 'shivendra@gmail.com', 24);
