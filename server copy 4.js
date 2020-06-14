const http = require('http');
const url = require('url');

const server = http.createServer();

server.on('request', (request, response)=>{
    console.log('Server is listening.....');
    const parseUrlParamters = url.parse( request.url , true); // true parameter here makes sure that query parameter is also parsed
    console.groupCollapsed(parseUrlParamters);

});

server.listen(8080);




/// client request: curl http://localhost:8080/data\?id\=123456