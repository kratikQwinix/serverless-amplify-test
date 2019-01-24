"use strict";

const User = require("../models/user").User;

module.exports.create = (event, context, callback) => {
  var params =
    typeof event.body == "object" ? event.body : JSON.parse(event.body);
  const new_user = new User({
    firstName: params.firstName,
    lastName: params.lastName
  });
  new_user.save(err => {
    console.log(err);
    return;
  });
  const response = {
    statusCode: 200,
    message: "User created"
  };
  callback(null, response);
};
