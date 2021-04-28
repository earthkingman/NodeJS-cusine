const router = require("express").Router();
const subscriberRoutes = require("./subscriberRoutes");

router.use("/subscribers", subscriberRoutes);


module.exports = router;