// brings in all the functions we need from the express module
const express = require("express");

// create application object that uses express
let app = express();

// define a port that will communicate through
let PORT = 5002;

app.use(express.json());

// route that adds a single todo to the list

/*

- need an array to hold my todo objects
- read description from request body and create a new todo object with the description
- use a random number for the id
- set completed to false

*/

const db = []; // just for testing. normally data would be persistent inside a database.

app.post("/todos", (req, res) => {
  let newItem = {};
  newItem.description = req.body.description;
  newItem.id = Math.floor(Math.random() * 100000);
  newItem.completed = false;
  db.push(newItem);
  console.log(`item added`);
  console.log(db);
  res.json(newItem);
});

// route that returns all the todos in our list
app.get("/todos", (req, res) => {
  res.json(db);
});

// route that returns a single todo based on the id provided
app.get("/todos/:id", (req, res) => {
  let identifier = req.params.id;
  const result = db.filter((element) => element.id == identifier);
  if (result.length == 0) {
    res.send(`No todo with that ID was found`);
  } else {
    res.json(result[0]);
  }
});

// route that will delete a single todo based on the id provided
app.delete("/todos/:id", (req, res) => {
  let identifier = req.params.id;
  console.log(identifier);
  const result = db.filter((element) => element.id == identifier)[0];
  if (db.filter((element) => element.id == identifier).length == 0) {
    res.send(`No todo with that ID was found`);
  } else {
    const foundIndex = db.indexOf(result);
    console.log(`foundIndex: ${foundIndex}`);
    // ^^ not returning -1, so we're good.
    db.splice(foundIndex, 1);
    res.json(result);
  }
});

// todos don't persist with nodemon whenever I save.

// route that updates an existing todo based on the id provided
app.put("/todos/:id", (req, res) => {
  let identifier = req.params.id;
  const result = db.filter((element) => element.id == identifier)[0];
  if (db.filter((element) => element.id == identifier).length == 0) {
    res.send(`No todo with that ID was found`);
  } else {
    const foundIndex = db.indexOf(result);
    console.log(req.body);
    for (key in req.body) {
      result[key] = req.body[key];
    }
    db.splice(foundIndex, 1, result);
    console.log(`after data processing`);
    console.log(db[foundIndex]);
    res.send(db[foundIndex]);
    // it's getting updated
  }
});

app.listen(PORT, () => {
  console.log("Server running app.js, listening on port", PORT);
});
