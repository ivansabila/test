const capitalize = require("../utils/capitalize");

class DashboardController {
    static async index(req, res) {
        res.render("./user/index", { activeRoute: "dashboard" });
    }
}

module.exports = DashboardController;
