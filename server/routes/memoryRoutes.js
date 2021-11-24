const router = require("express").Router();
const memoryController = require("../controllers/memoryController");

router.route("/").get(memoryController.index);
router.route("/:memoryID").get(memoryController.singleMemory);

module.exports = router;
