const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");

// Matches with "/api/user/signup"
router.route("/signup")
  .post(userController.create);

// Matches with "/api/user/login"
router.route("/login")
  .post(passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

// Matches with "/api/user/logout"
router.route("/logout")
  .get((req, res) => {
    req.logout();
    res.redirect("/")
  });

module.exports = router;