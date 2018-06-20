const http = require('http');

function compute() {
  let n = 100;
  while (--n) {}
  process.nextTick(compute);
}

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
}).listen(5000, '127.0.0.1');

compute();