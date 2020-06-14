const http = require('http');
const url = require('url');

//*** Routes Debugging */
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
        if(parseUrlParamters.pathname !=='/myUsers'){
            console.log(`!!! Danger****`);

          
            console.log(`Server invalid Path ${http.STATUS_CODES[404]} = ${parseUrlParamters.pathname}`);
        }

    }
    else{
        console.log(`!!! Danger--->>>> Some thing wend wrong`);
        console.log(request.headers);
    }

});

server.listen(8080);




/// curl -i http://localhost:8080/myBooks