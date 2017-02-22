const http = require('http')  
const client = require('request')  
const port = 3000

const requestHandler = (request, response) => {  

  response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Request-Method', '*');
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	response.setHeader('Access-Control-Allow-Headers', '*');

  if (request.url.indexOf('favicon') === -1) {
    client('http://api.manilainvestor.com/v1/stocks/hdata' + request.url,
    function(error, rs, body) {
      response.end(body);
    });
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
})
