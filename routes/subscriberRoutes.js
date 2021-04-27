const router = require("express").Router();
const subscribersController = require("../controllers/subscribersController");

//SUBSCRIBERS

router.put("/:id/update", subscribersController.update, subscribersController.redirectView);
router.delete("/:id/delete", subscribersController.delete, subscribersController.redirectView);
router.post("/create", subscribersController.create, subscribersController.redirectView);
router.get("/", subscribersController.index, subscribersController.indexView);
router.get("/new", subscribersController.new);
router.get("/:id", subscribersController.show, subscribersController.showView);
router.get("/:id/edit", subscribersController.edit);

module.exports = router;
