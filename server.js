const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');

const port = process.env.PORT || 5000; // make it 5000 to match frontend env

const server = http.createServer(app);

// Initialize Socket.io
initializeSocket(server);

// Start server
server.listen(port, '0.0.0.0', () => {
    console.log(`🚀 Server is running on port ${port}`);
});
