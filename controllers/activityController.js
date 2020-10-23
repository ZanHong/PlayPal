const db = require("../models");

// Defining methods for the activitiesController
module.exports = {
  findAll: function (req, res) {
    db.Activity
      .find(req.query)
      .then(dbActivities => {
        console.log(dbActivities);
        res.json(dbActivities);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Activity
      .create(req.body)
      .then(dbActivities => {
        console.log(dbActivities)
        res.json(dbActivities)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Activity.findById(req.params.id)
      .then(dbActivities => {
        res.json(dbActivities)
      })
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function (req, res) {

  }
}