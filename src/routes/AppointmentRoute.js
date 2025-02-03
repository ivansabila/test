const express = require("express");
const AppointmentController = require("../controllers/AppointmentController");

const router = express.Router();

router.get("/", AppointmentController.index);
router.get("/add", AppointmentController.create);
router.get("/update", AppointmentController.edit);
router.get("/detail", AppointmentController.show); // (/:id)
router.get("/history", AppointmentController.showAll);

module.exports = router;
