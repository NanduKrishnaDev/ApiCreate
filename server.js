const http = require('http');
const app = require('./apps')

const port = process.env.PORT || 4000;//defining port number

const server = http.createServer(app);//connecting with the main router

server.listen(port); 
