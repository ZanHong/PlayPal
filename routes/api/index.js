const router = require("express").Router();
const activityRoutes = require("./activity");
const userRoutes = require("./user");

router.use("/activity", activityRoutes);
router.use("/user", userRoutes);

module.exports = router;