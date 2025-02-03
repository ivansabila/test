const express = require("express");
const upload = require("../utils/uploadImage");
const UserController = require("../controllers/UserController");
const UpdateMiddleware = require("../middlewares/UpdateMiddleware");

const router = express.Router();

router.get("/:id", UserController.show);
router.get("/:id/update", UserController.edit);
router.post("/:id/update", upload.single("avatar"), UpdateMiddleware, UserController.update);


module.exports = router;
