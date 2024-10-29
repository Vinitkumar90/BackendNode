import http from "http";
import king from "./features.js";
import { gfname, bfname } from "./features.js";
import fs from "fs";
import path from "path"




console.log(gfname);
console.log(bfname);

console.log(king);

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("<h1>About Page</h1>");
  } 
  else if (req.url === "/") {
    fs.readFile("a.txt", "utf-8", (err, data) => {
      res.end(data);
    });
  }
   else if (req.url === "/contact") {
    res.end("<h1>Contact Pages</h1>");
  } 
  else {
    res.end(req.method)
  }
});

server.listen(5000, () => {
  console.log("server is listening on port 500");
});
