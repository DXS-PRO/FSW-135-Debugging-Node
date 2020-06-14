const http = require('http');
const url = require('url');
// npm install body

const txtBody = require("body");
const jsonBody = require("body/json");
const formBody = require("body/form");
const anyBody = require("body/any");


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

    jsonBody(request, response, (error, body)=>{ // call back function and the two parameters will be passed to you
        console.log(body);
        //or
        const userName = body['myName'];
        console.log(`The value of myName: ${userName}`);

        
    });

    
    
});

server.listen(8080);




/// curl --header Content-Type:application/json --request POST --data @sample-data.json  http://localhost:8080
/// curl --header Content-Type:application/json --request POST --data '{"myName":"Bryan"}' http://localhost:8080
