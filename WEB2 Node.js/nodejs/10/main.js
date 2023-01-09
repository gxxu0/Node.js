var http = require('http');
var fs = require('fs');
var url = require('url'); //url이라는 모듈을 사용한다고 Node.js에 알림. 
//require : 요구하다. 
//http / fs / url : 모듈(module) - Node.js가 갖는 기능을 유사한 것 끼리 모아놓은 것.


var app = http.createServer(function (request, response) {
  var _url = request.url; // Query string의 값(id=HTML의 HTML)은 request.url에게 반영.
  var queryData = url.parse(_url, true).query; //queryData는 
  console.log(queryData); // { id: 'HTML' } - 객체
  console.log(queryData.id); //HTML

  console.log(url);
  if (_url == '/') {
    _url = '/index.html';
  }
  if (_url == '/favicon.ico') {
    return response.writeHead(404);
  }
  response.writeHead(200);
  //console.log(__dirname + _url);
  //response.end(fs.readFileSync(__dirname + _url)); //사용자가 접속한 url에 따라 파일들을 읽어주는 코드. 
  response.end(queryData.id);
  // response.end('jinny : ' + _url);

});
app.listen(3000); //port번호 3000번에 Node.js Web server를 실행. -> url에 3000이라고 명시. 