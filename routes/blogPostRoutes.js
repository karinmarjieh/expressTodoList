const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/", controller.getPosts);

router.post("/", controller.postPost);

router.get("/:id", controller.getPostById);

router.put("/:id", controller.putPost);

router.delete("/:id", controller.deletePost);

module.exports = router;
