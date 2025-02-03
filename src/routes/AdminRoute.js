const express = require("express");
const AdminController = require("../controllers/AdminController");
const ValidateDoctor = require("../middlewares/ValidateDoctor");

const router = express.Router();

router.get("/", AdminController.index);
router.get("/profile", AdminController.show);
router.get("/profile/change-password", AdminController.password);
router.post("/profile/change-password", AdminController.change);

router.get("/user-list", AdminController.userList);

router.get("/doctor-list", AdminController.doctorList);
router.get("/doctor-list/add", AdminController.addDoctorList);
router.post("/doctor-list/add", ValidateDoctor, AdminController.storeDoctor);

module.exports = router;
