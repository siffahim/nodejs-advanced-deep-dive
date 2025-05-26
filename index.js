const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
  fs.appendFile(
    "./log.txt",
    `${Date.now().toLocaleString()} ${req.headers["sec-ch-ua-platform"]} ${
      req.headers.host
    }\n`,
    (err, data) => {
      res.end("Hello from nodejs");
    }
  );
});

app.listen(8000, () => {
  console.log("Server is running...");
});
