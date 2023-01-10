var testFolder = "./data/";
var fs = require("fs");

fs.readdir(testFolder, function (error, filelist) {
  //error, filelist->변수이름
  console.log(filelist); // [ 'CSS', 'HTML', 'JavaScript' ]
});
