const express = require("express");
const DashboardController = require("../controllers/DashboardController");
const AuthZMiddleware = require("../middlewares/AuthZMiddleware");

const router = express.Router();

router.use(AuthZMiddleware);
router.get("/", DashboardController.index);

module.exports = router;
