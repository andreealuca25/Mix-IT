const express = require("express");
const app = express();
const port = 3000;
const beverageRoute = require("./routes/BeverageRoute");

app.use((req, res, next) => {
  //for testing purposes, allowing CORS
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use("/beverage", beverageRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`MixIT Server listening on port ${port}`);
});
