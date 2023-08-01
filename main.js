// is this thing on ??
// console.log(`loading main.js!`);

// brings in all the functions we need from the express module
const express = require("express");

// const axios = require("axios");

// create application object that uses express
let app = express();

// define a port that will communicate through
let PORT = 5001;

// for testing, our domain name is http://localhost:5001

// for any request where the route is "/hello"
// send a string as a response

app.get("/hello", (req, res) => {
  res.send("Hello!!!");
});

// write a GET request with a route that will let me get a message by name
// route /hello/Annie <- this is a request parameter

app.get("/hello/:name", (req, res) => {
  //   res.send("Hello!!!");
  let value = req.params.name;
  res.send(`Hi ${value}`);
});

// write a GET route definition that uses a query parameter

// if request URL contains /bye?name=Jill -> 'See you later Jill!'
// if request URL contains /bye?name=Robert -> 'See you later Robert!'
// if endpoint is just /bye     -> 'See you later!'

// hint: req.query.name

app.get("/bye", (req, res) => {
  let value = req.query.name;
  //   console.log(value);
  //   console.log(!value);
  const newValue = value ? `See you later ${value}!` : `See you later!`;
  res.send(newValue);
});

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
