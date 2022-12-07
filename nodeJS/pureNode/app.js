const http = require("http");
const url = require("url");
const fs = require("fs");
const server = http.createServer(function (req, res) {
  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.pathname;
  //   path = path.replace(/^\/+|\/+$/g, "");
  console.log(path);
  let qs = parsedURL.query;
  let headers = req.headers;
  let method = req.method.toLowerCase();

  req.on("data", function () {
    console.log("got some data");
  });
  req.on("end", function () {
    console.log("send a response");
    let route =
      typeof routes[path] !== "undefined" ? routes[path] : routes["notFound"];
    let data = {
      path: path,
      queryString: qs,
      headers: headers,
      method: method,
      buffer: "",
    };
    route(data, res);
  });
});

server.listen(1234, function () {
  console.log("Listening on port 1234");
});

let routes = {
  "/": function (data, res) {
    const myIndex = fs.readFileSync("./index.html");
    // console.log(myIndex);
    // let payloadStr = JSON.stringify(payload);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.write(myIndex);
    res.end("\n");
  },

  "raw-html": function (data, res) {
    let payload = {
      message: "File Found",
      code: 200,
    };
    let payloadStr = JSON.stringify(payload);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.write(payloadStr);
    res.end("\n");
  },
  users: function (data, res) {
    const users = require("./users.json");
    console.log(users);
    let payloadStr = JSON.stringify(users);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.write(payloadStr);
    res.end("\n");
  },
  notFound: function (data, res) {
    let payload = {
      message: "File Not Found",
      code: 404,
    };
    let payloadStr = JSON.stringify(payload);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(404);

    res.write(payloadStr);
    res.end("\n");
  },
};
