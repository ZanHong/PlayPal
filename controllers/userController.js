const db = require("../models");

// Defining methods for the userController
module.exports = {
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(() => {
        res.redirect(307, "/api/user/signup")
      })
      .catch(err => console.log(err))
  }
}