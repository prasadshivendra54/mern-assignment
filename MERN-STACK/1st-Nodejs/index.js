
// 1st Question - Node.js: Write a basic Node.js server that listens on port 3000 and returns a "Hello, World!" message when the root URL is accessed.


// My Code 👇

const http = require('http');

// HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // response body in Client Site (Brouser)
    res.end('Hello, World!\n');
});

// server listening on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// To Run this code we have to move to our directory by using cd (Change Directory) Comond, and then just type node filename, Like node index.js 