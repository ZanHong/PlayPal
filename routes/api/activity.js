const router = require("express").Router();
const activityController = require("../../controllers/activityController");

// Matches with "/api/activities/"
router.route("/")
  .get(activityController.findAll)
  .post(activityController.create)

// Matches with "/api/activities/:id"
router
  .route("/:id")
  .get(activityController.findById)

module.exports = router;