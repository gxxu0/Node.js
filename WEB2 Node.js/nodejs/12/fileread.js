//Node.js 모듈 중 fileSystem
const fs = require("fs"); //fs라는 변수를 통해 Node.js의 모듈인 fileSystem을 다룰 수 있음.

fs.readFile("sample.txt", "utf-8", function (err, data) {
  console.log(data); //undefined
});
