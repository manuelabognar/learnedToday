const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Start file upload")
});

app.listen(3333);