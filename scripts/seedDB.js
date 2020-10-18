const mongoose = require("mongoose");
const db = require("../models");

// This file empties the PlayPal collection and inserts the activities below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/playpal"
);

const ActivitySeed = [
  {
    title: "test 1",
    author: "test 1",
    category: "1",
    description: "test 1",
    preparation: "No planning is needed. Make it fun and spontaneous for your little ones!"
  },
  {
    title: "test 2",
    author: "test 2",
    category: "2",
    description: "test 2",
    preparation: "No planning is needed. Make it fun and spontaneous for your little ones!"
  }
];

db.Activity
  .remove({})
  .then(() => db.Activity.collection.insertMany(ActivitySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });