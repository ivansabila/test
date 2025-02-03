const User = require("../models/UserModel");
const Doctor = require("../models/DoctorModel");
const capitalize = require("../utils/capitalize");

class AdminController {
    static async index(req, res) {
        res.render("./admin/index", { activeRoute: "dashboard" });
    }

    static async show(req, res) {
        res.render("./admin/profile", { activeRoute: {} });
    }

    static async password(req, res) {
        res.render("./admin/profile-password", { errors: {}, activeRoute: {} });
    }

    static async change(req, res) {
        const { currentPass, newPass, validatePass } = req.body;
        const { id } = req.session.user;

        const objUser = { currentPass, newPass, validatePass, id };

        const data = await Doctor.change(objUser);
        console.log("🚀 ~ AdminDashboardController ~ change ~ data.error:", Object.keys(data.error).length);

        if (Object.keys(data.error).length) {
            res.render("./admin/profile-password", { errors: data.error, activeRoute: {} });
        } else {
            res.redirect("/admin/profile");
        }
    }

    static async userList(req, res) {
        const data = await User.show();
        res.render("./admin/user-list", { data: data, activeRoute: "userList" });
    }

    static async doctorList(req, res) {
        res.render("./admin/doctor-list", { activeRoute: "doctorList" });
    }

    static async addDoctorList(req, res) {
        res.render("./admin/addDoctorList", { errors: {}, oldData: {}, activeRoute: "doctorList" });
    }

    static async storeDoctor(req, res) {
        res.redirect("/admin/doctor-list");
    }
}

module.exports = AdminController;
