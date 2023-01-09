var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var title = queryData.id; //title

  if (_url == "/") {
    //localhost:3000
    // _url = "/index.html";//home으로 갔을 때, /index.html로 가라.
    title = "Welcome";
  }
  if (_url == "/favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);

  fs.readFile(`data/${queryData.id}`, "utf-8", function (err, description) {
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
    response.end(template);
  }); //query String 에 따라 파일명 생성
});
app.listen(3000);
