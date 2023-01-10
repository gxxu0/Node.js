var fs = require("fs"); //fs모듈을 불러와서 fs변수라는 이름을 붙임.

// readFileSync - 동기적
// console.log("A");
// var result = fs.readFileSync("28/28.2.1.txt", "utf-8");
// console.log(result);
// console.log("C");

//A
//B
//C

//readFile - 비동기적 ( 선호 )
console.log("A");
fs.readFile("28/28.2.1.txt", "utf-8", function (error, result) {
  console.log(result);
});

console.log("C");

//A
//C
//B
