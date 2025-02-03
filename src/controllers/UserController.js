const User = require("../models/UserModel");
const capitalize = require("../utils/capitalize");

class UserController {
    static async show(req, res) {
        res.render("./user/profile", { activeRoute: {} });
    }
    
    static async edit(req, res) {
        res.render("./user/profile-edit", { errors: {}, oldData: {}, activeRoute: {} });
    }

    static async update(req, res) {
        const { username, email, phone } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : res.locals.user.image;
        const id = req.session.user.id;
        const objUser = { id, username, email, phone, image };
        
        req.session.user.full_name = objUser.username;
        req.session.user.email = objUser.email;
        req.session.user.phone = objUser.phone;
        req.session.user.image = objUser.image;

        req.session.user.full_name = capitalize(req.session.user.full_name);

        const data = await User.update(objUser);

        // req.session.user;

        res.render("./user/profile", { activeRoute: {} });
    }
}

module.exports = UserController;
