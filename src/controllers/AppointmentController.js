class AppointmentController {
    static async index(req, res) {
        res.render("./user/appointment", { activeRoute: "appointment" });
    }

    static async create(req, res) {
        res.render("./user/appointment-add");
    }

    static async edit(req, res) {
        res.render("./user/appointment-edit");
    }

    static async show(req, res) {
        res.render("./user/appointment-detail", { activeRoute: "appointment" });
    }

    static async showAll(req, res) {
        res.render("./user/appointment-history", { activeRoute: "appointment" });
    }
}

module.exports = AppointmentController;
