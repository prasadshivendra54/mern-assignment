
// 2nd Question - Express.js: Create a simple REST API using Express.js with a single route /users that returns a JSON list of users.


// Here is My Code 👇

const express = require('express');
const app = express();
const PORT = 3000;

// user data
const users = [
    { id: 1, name: 'Shivendra' },
    { id: 2, name: 'Rahul' },
    { id: 3, name: 'Aman' }
];

// Created the /users route
app.get('/users', (req, res) => { // get request
    res.json(users); // Send the users array as JSON Data
});

// Starting the server on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// To Run this code we have to move to our directory by using cd (Change Directory) Comond, and then just type node filename, Like node index.js
// then my server will run in localhost:3000 and then if we want to get our data we will add /users, for example http://localhost:3000/users , we will see oue data in brouser  
