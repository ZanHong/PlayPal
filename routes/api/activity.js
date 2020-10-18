const router = require("express").Router();
const activityController = require("../../controllers/activityController");

router.route("/")
  .get(activityController.findAll)
  .post(activityController.create)

module.exports = router;