const db = require("../models");

// Defining methods for the activitiesController
module.exports = {
  findAll: function (req, res) {
    db.Activity
      .find(req.query)
      .then(dbActivities => {
        res.json(dbActivities);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Activity
      .create(req.body)
      .then(dbActivities => {
        res.json(dbActivities)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Activity
      .findById(req.params.id)
      .then(dbActivities => {
        res.json(dbActivities)
      })
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function (req, res) {
    // console.log(req.params)
    db.Activity
      .find({
        category: req.params.category
      })
      .then(dbActivities => {
        res.json(dbActivities)
      })
      .catch(err => res.status(422).json(err));
  }
}