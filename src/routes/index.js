const express = require("express");
const RegisterRoute = require("./RegisterRoute");
const LoginRoute = require("./LoginRoute");
const DashboardRoute = require("./DashboardRoute");
const AppointmentRoute = require("./AppointmentRoute");
const UserRoute = require("./UserRoute");

const DashboardAdminRoute = require("./AdminRoute")


const router = express.Router();

router.use("/register", RegisterRoute);
router.use("/login", LoginRoute);
router.use("/", DashboardRoute);
router.use("/appointments", AppointmentRoute);
router.use("/profile", UserRoute);

router.use("/admin", DashboardAdminRoute);





module.exports = router;
