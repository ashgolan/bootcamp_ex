const express = require("express");
const path = require("path");
const publicDirectoryPath = path.join(__dirname, "/public");
console.log(__dirname);
const app = express();
app.use(express.static(publicDirectoryPath));
app.get("", (req, res) => {
  res.send("<h2 style='color : red'>Hello</h2>");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.listen(3000, () => {
  console.log("server is load...");
});
