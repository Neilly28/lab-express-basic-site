// require express
const express = require("express");

// capture express method in app variable
const app = express();

// give access to assets
app.use(express.static(__dirname + "/public"));

// start the express server
app.listen(3000, () => {
  console.log("listening from port 3000!");
});

// creating routes
app.get("/", (req, res) => {
  //   res.send("hello from the homepadadsge!");
  res.sendFile(__dirname + "/views/home.html");
});

// creating routes
app.get("/about", (req, res) => {
  //   res.send("hello from the about page!");
  res.sendFile(__dirname + "/views/about.html");
});

// creating routes
app.get("/works", (req, res) => {
  //   res.send("hello from the works page!");
  res.sendFile(__dirname + "/views/works.html");
});

// creating routes
app.get("/gallery", (req, res) => {
  res.send("hello from the gallery page!");
});

// creating routes
app.get("*", (req, res) => {
  res.send("I don't know that route!");
});
