const db = require("../models");

// Defining methods for the userController
module.exports = {
  create: function (req, res) {
    db.User
      .create(req.body)
      .then((dbUser) => res.json(dbUser))
      .catch(err => console.log(err))
  },

  // For future testings so that users can view others' profile
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}