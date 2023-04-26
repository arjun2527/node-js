// const app = require('./app');

// console.log(app.z());

// //! filter
// const arr = [2,4,6,8,10,5,3,26,2,4,7,3,3];
// let result = arr.filter((item)=>{
//     return item>=3;
// });
// console.log(result);

//* six class
// const fs = require('fs');
// console.log("code step by step");
// fs.writeFileSync("script.js","code step by step");
// console.log("->>",__dirname);
// console.log(__filename);
// fs.writeFileSync("node.txt","code step by step");

//* Seven class
//! Basic sever 
const http = require('http');

// let arr  = function(req, resp){
//     resp.write("<h1>hello this is manish rana from 4achiever. How may I help You</h1>");
//     resp.end();
// }
// http.createServer(arr).listen(4500);

http.createServer((req, resp)=>{
    resp.write("<h1>hello this is manish rana from 4achiever. </h1>");
    resp.end();

}).listen(4500);


