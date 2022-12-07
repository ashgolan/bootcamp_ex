const express = require("express");
const app = express();

app.get("/numbers", (req, res) => {
  res.send("success get");
});
app.post("/numbers", (req, res) => {
  res.send("success post");
});
app.put("/numbers", (req, res) => {
  res.send("success put");
});
app.delete("/numbers", (req, res) => {
  res.send("success delete");
});

app.listen(3000, () => {
  console.log("listeniing at port:3000");
});
