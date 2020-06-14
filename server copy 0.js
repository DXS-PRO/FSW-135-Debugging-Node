const http = require('http');

const server = http.createServer();

server.on('request', (request, response)=>{
    console.log('This is an incoming request');
    response.write(http.STATUS_CODES[404]);
});

server.listen(8080);