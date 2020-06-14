const http = require('http');
const url = require('url');


const server = http.createServer();
server.on('request', (request, response)=>{
    console.log(`The reauest type = ${request.method}`);
    if(request.method==='GET'){

        console.log('Server is listening.....');
        const parseUrlParamters = url.parse( request.url , true); // true parameter here makes sure that query parameter is also parsed
        console.groupCollapsed(parseUrlParamters);
        const {id} = parseUrlParamters.query;
        console.log(id);
        console.log(request.headers);
    }

    if(request.method==='POST'){

    }
    request.on('data', (chunk)=>{
        console.log(chunk.toString());
    });

    
});

server.listen(8080);




/// curl --header Content-Type:application/json --request POST --data @sample-data.json  http://localhost:8080
