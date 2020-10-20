const db = require("../models");

// Defining methods for the userController
module.exports = {
  create: function (req, res) {
    db.User
      .create(req.body)
      .then((dbUser) => {
        res.json(dbUser)
      })
      .catch(err => console.log(err))
  }
}