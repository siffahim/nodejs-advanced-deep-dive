const fs = require("fs");

//write a file
//fs.writeFileSync("./test.txt", "Hey There from fs!");

// read file
// const result = fs.readFileSync("./contact.txt", 'utf-8');

// console.log(result);

//append
fs.appendFileSync("./contact.txt", `${Date.now()} Hey There\n`);

//fs.cpSync("./contact.txt", "./copy.txt")

//fs.copyFileSync("./contact.txt", "./b.txt");

fs.unlinkSync('./a.txt');