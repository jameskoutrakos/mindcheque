const knex = require("knex")(require("../knexfile").development);

exports.index = (req, res) => {
  knex("user")
    .select("*")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(400)
        .send(`Ran into an error while trying to get the user info: ${err}`);
    });
};

exports.userMemories = (req, res) => {
  knex("memory")
    .where({ userID: req.params.userID })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(400)
        .send(
          `Ran into an error while trying to get the user's memories: ${err}`
        );
    });
};

exports.addMemoryByUser = (req, res) => {
  knex("memory")
    .insert(req.body)
    .then((data) => {
      res.status(201).json({
        message: "This memory to the user has been added successfully",
        data: data,
      });
    })
    .catch((err) => {
      res
        .status(400)
        .send(
          `Ran into an error while trying to insert a new memory to this user: ${err}`
        );
    });
};

exports.editMemoryByUser = (req, res) => {
  knex("memory")
    .update(req.body)
    .where({ memoryID: req.params.memoryID })
    .then((data) => {
      res.json({
        message: "This memory has been updated successfully",
        data: data,
      });
    })
    .catch((err) => {
      res
        .status(400)
        .send(`Ran into an error while trying to update this memory: ${err}`);
    });
};

exports.deleteMemoryByUser = (req, res) => {
  knex("memory")
    .delete()
    .where({ memoryID: req.params.memoryID })
    .then((data) => {
      res.status(204).json({
        message: "This memory has been deleted successfully",
        data: data,
      });
    })
    .catch((err) => {
      res
        .status(400)
        .send(`Ran into an error while trying to delete this memory: ${err}`);
    });
};
