"use strict";

const dynamoose = require("dynamoose");

dynamoose.local();

const Schema = dynamoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
});

let User = dynamoose.model("users", userSchema);

exports.User = User;
