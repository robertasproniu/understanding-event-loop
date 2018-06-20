const http = require("http");

const compute = () => {
  let n = 10000;
  while (--n) {}
  process.nextTick(compute);
};

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  })
  .listen(5000, "127.0.0.1");

compute();
