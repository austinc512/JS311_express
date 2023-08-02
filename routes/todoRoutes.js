const express = require("express");
const router = express.Router();

const todoControllers = require("../controllers/todoControllers");

router.post("/todos", todoControllers.postTodo);

router.get("/todos", todoControllers.getAllTodos);

router.get("/todos/:id", todoControllers.getById);

router.delete("/todos/:id", todoControllers.deleteTodo);

router.put("/todos/:id", todoControllers.updateTodo);

module.exports = router;

// defining endpoints
