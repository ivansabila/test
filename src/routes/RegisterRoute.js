const express = require("express");
const RegisterController = require("../controllers/RegisterController");
const AuthNMiddleware = require("../middlewares/AuthNMiddleware");

const router = express.Router();

router.get("/", RegisterController.index);
router.post("/", AuthNMiddleware, RegisterController.store);

module.exports = router;
