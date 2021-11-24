const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/").get(userController.index);

router.route("/:userID/memories").get(userController.userMemories);

router
  .route("/:userID/memories/add-memory")
  .post(userController.addMemoryByUser);

router
  .route("/:userID/memories/:memoryID/edit-memory")
  .put(userController.editMemoryByUser);

router
  .route("/:userID/memories/:memoryID/delete-memory")
  .delete(userController.deleteMemoryByUser);

module.exports = router;
