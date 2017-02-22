const http = require('http')  
const client = require('request')  
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {  

  response.setHeader('Access-Control-Allow-Origin', 'https://stock-cache.herokuapp.com');
	response.setHeader('Access-Control-Request-Method', '*');
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	response.setHeader('Access-Control-Allow-Headers', '*');

  if (request.url.indexOf('favicon') === -1) {
    client('http://api.manilainvestor.com/v1/stocks/hdata' + request.url,
    function(error, rs, body) {
      if (error) {
        response.end(error);
      } else {
        response.end(body);
      }
    });
  } else {
    response.end('');
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
})
