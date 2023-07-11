// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
let items = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  }
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { theday: day, newlistitems: items });
});

app.post("/", function (req, res) {
  let item = req.body.newitem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is connected");
});
