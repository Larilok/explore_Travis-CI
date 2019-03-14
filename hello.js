'use strict';

// const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  res.whiteHead(200, { 'ContentType': 'text/plain' });
  res.end('Hello Travis!\n');
}).listen(8080);
console.log('Server running at port 8080');
