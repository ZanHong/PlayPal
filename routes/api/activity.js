const router = require("express").Router();
const activityController = require("../../controllers/activityController");

router.route("/")
  .get(activityController.findAll)
  .post(activityController.create)

router
  .route("/:id")
  .get(activityController.findById)

module.exports = router;