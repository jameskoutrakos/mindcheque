const knex = require("knex")(require("../knexfile").development);

exports.index = (req, res) => {
  knex("memory")
    .select("*")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(400)
        .send(`Ran into an error while trying to get memory info: ${err}`);
    });
};

exports.singleMemory = (req, res) => {
  knex("memory")
    .where({ memoryID: req.params.memoryID })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(400)
        .send(`Ran into an error while trying to get the memory info: ${err}`);
    });
};
