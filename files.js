const fs = require("fs");
const { dirname } = require("path");

//console.log(fs.readFileSync("responce.html ", "utf8"));

// fs.readFile("responce.html", "utf8", (err, data) => {
//   if(err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// fs.writeFile("sample.txt", "Hello World", (err, data) => {
//   if(err) {
//     console.error(err);
//     return;
//   }
//   console.log("data written to file");
// });

// fs.appendFile("sample.txt", "Hey There", (err, data) => {
//   if(err) {
//     console.error(err);
//     return;
//   }
//   console.log("data append to file");
// });

// fs.unlink("sample.txt", (err, data) => {
//   if(err) {
//     console.error(err);
//     return;
//   }
//   console.log("data deleted from file");
// });


fs.rmdirSync('exampleDir');
fs.mkdirSync("exapmpleDir");
console.log("Directory Created Successfully");

console.log(--__dirname);

const folderPath = path.join(--dirname,"node-modules");
console.log(folderPath);

