const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/", controller.getTodos);

router.post("/", controller.postTodo);

router.get("/:id", controller.getTodoById);

router.put("/:id", controller.putTodo);

router.delete("/:id", controller.deleteTodo);

module.exports = router;
