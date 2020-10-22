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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ex diam, tincidunt nec imperdiet at, sagittis id magna. Vivamus tristique imperdiet efficitur. Suspendisse convallis felis auctor elit feugiat, at dapibus risus pharetra. Etiam vitae odio sem. Etiam rhoncus, mi eget malesuada iaculis, elit metus dignissim est, et lacinia turpis dolor et mi. Praesent fermentum enim vel magna porttitor pretium. Pellentesque et ligula non diam aliquet dapibus. Fusce placerat, dui et venenatis vestibulum, ex lorem ornare dui, eget ullamcorper neque nunc ac ante. Donec sed pulvinar justo, in auctor velit. Mauris eget suscipit justo. Praesent placerat est at ante malesuada vulputate. Phasellus quis lobortis nisl. Etiam vitae facilisis mi. Suspendisse sollicitudin rutrum molestie. Proin sed arcu felis. Donec ac quam congue, feugiat massa eget, tristique mauris. Mauris id sagittis tellus. Donec maximus dapibus nisl ac consequat.",
    preparation: "No planning is needed. Make it fun and spontaneous for your little ones!"
  },
  {
    title: "test 2",
    author: "test 2",
    category: "2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ex diam, tincidunt nec imperdiet at, sagittis id magna. Vivamus tristique imperdiet efficitur. Suspendisse convallis felis auctor elit feugiat, at dapibus risus pharetra. Etiam vitae odio sem. Etiam rhoncus, mi eget malesuada iaculis, elit metus dignissim est, et lacinia turpis dolor et mi. Praesent fermentum enim vel magna porttitor pretium. Pellentesque et ligula non diam aliquet dapibus. Fusce placerat, dui et venenatis vestibulum, ex lorem ornare dui, eget ullamcorper neque nunc ac ante. Donec sed pulvinar justo, in auctor velit. Mauris eget suscipit justo. Praesent placerat est at ante malesuada vulputate. Phasellus quis lobortis nisl. Etiam vitae facilisis mi. Suspendisse sollicitudin rutrum molestie. Proin sed arcu felis. Donec ac quam congue, feugiat massa eget, tristique mauris. Mauris id sagittis tellus. Donec maximus dapibus nisl ac consequat.",
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