const { createProxyMiddleware } = require("http-proxy-middleware");
const express = require("express");
const path = require("path");
const request = require("request");
const app = express();

const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "build")));

app.get("/api*", function (req, res) {
  console.log(
    "http://chat-me-backend-067857517b19.herokuapp.com" + req.originalUrl
  );
  req
    .pipe(
      request.get({
        uri:
          "http://chat-me-backend-067857517b19.herokuapp.com" + req.originalUrl,
      
      })
    )
    .pipe(res);
});
app.post("/api*", function (req, res) {
  console.log(
    "http://chat-me-backend-067857517b19.herokuapp.com" + req.originalUrl
  );
  req
    .pipe(
      request.post({
        uri:
          "http://chat-me-backend-067857517b19.herokuapp.com" + req.originalUrl,
        json: req.body,
      })
    )
    .pipe(res);
});
app.delete("/api*", function (req, res) {
  console.log(
    "http://chat-me-backend-067857517b19.herokuapp.com" + req.originalUrl
  );
  req
    .pipe(
      request.delete({
        uri:
          "http://chat-me-backend-067857517b19.herokuapp.com" + req.originalUrl,
        
      })
    )
    .pipe(res);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log("listening on port: ", port);
});
