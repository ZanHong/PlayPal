const db = require("../models");

// Defining methods for the activitiesController
module.exports = {
  findAll: function (req, res) {
    db.Activity
      .find(req, res)
      .then(dbActivities => res.json(dbActivities))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Activity
      .create(req.body)
      .then(dbActivities => res.json(dbActivities))
      .catch(err => res.status(422).json(err));
  }
}