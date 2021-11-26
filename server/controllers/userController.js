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

exports.getSingleUser = (req, res) => {
  knex("user")
    .where({ userID: req.params.userID })
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

exports.getMemoryByUser = (req, res) => {
  knex("memory")
    .where({ userID: req.params.userID, memoryID: req.params.memoryID })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(400)
        .send(`Ran into an error while trying to get the memory info: ${err}`);
    });
};

exports.addMemoryByUser = (req, res) => {
  knex("memory")
    .insert({
      userID: req.body.userID,
      title: req.body.title,
      description: req.body.description,
      dateOfMemory: req.body.dateOfMemory,
      feeling: req.body.feeling,
      helpfulThought: req.body.helpfulThought,
      relatedMoment: req.body.relatedMoment,
    })
    .then((data) => {
      res.status(201).json({
        message: "This memory to the user has been added successfully",
        data: data,
      });
      console.log(req.body);
      console.log(data);
    })
    .catch((err) => {
      res
        .status(400)
        .send(
          `Ran into an error while trying to insert a new memory to this user: ${err}`
        );
      console.log("Didn't work ", req.body);
    });
};

exports.editMemoryByUser = (req, res) => {
  knex("memory")
    .update(req.body)
    .where({ userID: req.params.userID, memoryID: req.params.memoryID })
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
    .where({ userID: req.params.userID, memoryID: req.params.memoryID })
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
