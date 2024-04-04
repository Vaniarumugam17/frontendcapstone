// server.js

import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

server.listen(8000, () => {
  console.log("Server is running at http://localhost:3000/");
});
