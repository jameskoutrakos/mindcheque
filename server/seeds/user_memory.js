// import seed data files, arrays of objects
const userData = require("../seed_data/user");
const memoryData = require("../seed_data/memory");

exports.seed = function (knex) {
  return knex("user")
    .del()
    .then(function () {
      return knex("user").insert(userData);
    })
    .then(() => {
      return knex("memory").del();
    })
    .then(() => {
      return knex("memory").insert(memoryData);
    });
};
