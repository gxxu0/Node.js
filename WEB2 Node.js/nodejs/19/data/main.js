var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readFile(`data/${queryData.id}`, "utf-8", function (err, description) {
        var title = "WELCOME";
        var description = "Hello, Node.js";
        var template = `
        <!doctype html>
        <html>
    
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
    
        <body>
          <h1><a href="/">WEB</a></h1>
          <ul>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ul>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
    
        </html>
      `;
        response.writeHead(200);
        response.end(template);
      }); //query String 에 따라 파일명 생성
    } else {
      fs.readFile(`data/${queryData.id}`, "utf-8", function (err, description) {
        var title = queryData.id; //title
        var template = `
        <!doctype html>
        <html>
    
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
    
        <body>
          <h1><a href="/">WEB</a></h1>
          <ul>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ul>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
    
        </html>
      `;
        response.writeHead(200);
        response.end(template);
      }); //query String 에 따라 파일명 생성
    }
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
  // console.log(url.parse(_url, true)); //주어진 url(_url)정보를 분석해서 쉽게 사용하도록 함.
  // console.log(url.parse(_url, true).pathname); ///favicon.ico
});
app.listen(3000);
