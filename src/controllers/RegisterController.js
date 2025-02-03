const User = require("../models/UserModel");

class RegisterController {
    static index(req, res) {
        if (req.session.user) {
            res.redirect("/");
        }
        res.render("./auth/register", { errors: {}, oldData: {} });
    }

    static async store(req, res) {
        // destructure body and create "objUser" object
        const { username, email, phone, password } = req.body;
        const image = `/uploads/default.png`;
        const role = `user`;
        const objUser = { username, email, phone, password, image, role };

        // store data "objUser" object
        const error = await User.add(objUser);


        if (error) {
            return res.render("./auth/register", { errors: error, oldData: req.body });
        } else {
            res.redirect("/login");
        }
    }
}

module.exports = RegisterController;
