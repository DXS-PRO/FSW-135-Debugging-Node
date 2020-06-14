const http = require('http');

const server = http.createServer();

server.on('request', (request, response)=>{
    console.log(request);
    console.log(`The Status code for http.STATUS_CODES[404] = ${http.STATUS_CODES[404]}`);
});

server.listen(8080);