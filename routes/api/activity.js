const router = require("express").Router();
const activityController = require("../../controllers/activityController");
const isAuthenticated = require("../../config/middleware/isAuthenticated")

// Matches with "/api/activities/"
router.route("/")
  .get(activityController.findAll)
  .post(activityController.create)

// Matches with "/api/activities/:id"
router
  .route("/:id")
  .get(activityController.findById)

// Matches with "/api/activities/category/:category"
router
  .route("/category/:category")
  .get(activityController.findByCategory)

module.exports = router;