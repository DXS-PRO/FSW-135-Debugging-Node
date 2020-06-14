const http = require('http');
const url = require('url');


const server = http.createServer();
server.on('request', (request, response)=>{
    console.log('Server is listening.....');
    const parseUrlParamters = url.parse( request.url , true); // true parameter here makes sure that query parameter is also parsed
    console.groupCollapsed(parseUrlParamters);
    const {id} = parseUrlParamters.query;
    console.log(id);
    console.log(request.headers);
});

server.listen(8090);




/// client request: curl http://localhost:8080/data\?id\=123456
/// client request: curl  -H "CompanyName: BryanUniversity" http://localhost:8090/data\?id\=123456