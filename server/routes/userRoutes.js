const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/").get(userController.index).post(userController.addNewUser);

router.route("/login").post(userController.findUser);

router.route("/:userID").get(userController.getSingleUser);

router.route("/:userID/recent-memory").get(userController.userMemories);

router.route("/:userID/memories").get(userController.userMemories);

router.route("/:userID/memories/:memoryID").get(userController.getMemoryByUser);

router
  .route("/:userID/memories/add-memory")
  .post(userController.addMemoryByUser);

router
  .route("/:userID/memories/:memoryID/edit-memory")
  .put(userController.editMemoryByUser)
  .get(userController.getMemoryByUser);

router
  .route("/:userID/memories/:memoryID/delete-memory")
  .delete(userController.deleteMemoryByUser);

module.exports = router;
