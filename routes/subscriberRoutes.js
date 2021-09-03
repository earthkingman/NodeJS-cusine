// const express = require('express'); 주석과 같이 적어도됨
// const router = express.Router(); 
const router = require("express").Router();
const subscribersController = require("../controllers/subscribersController")

router.get("/", subscribersController.index, subscribersController.indexView);
router.get("/new", subscribersController.new);
router.get("/:id", subscribersController.show, subscribersController.showView);
router.get("/:id/edit", subscribersController.edit);
router.put("/:id/update", subscribersController.update, subscribersController.redirectView);
router.delete("/:id/delete", subscribersController.delete, subscribersController.redirectView);
router.post("/create", subscribersController.create, subscribersController.redirectView);

module.exports = router