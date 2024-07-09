const express = require("express");
const app = express();

app.get("/api/getUsers", (req, res) => {
  res.send({ message: "Hi, welcome to Node JS" });
});

app.listen(8000, () => {
  console.log("listening to 8000 port");
});
