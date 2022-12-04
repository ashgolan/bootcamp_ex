// import chalk from "chalk";
// const fs = require("fs");
// const chalk = require("");

const getNotes = require("./notes.js");
// console.log(fs);
// fs.writeFileSync("notes.txt", "Hello for my new notes file");
// fs.appendFileSync("notes.txt", " :lets begin");
const myNotes = getNotes();
console.log(myNotes);
