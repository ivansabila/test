const UpdateMiddleware = (req, res, next) => {
    // destructure body and create "objUser" object
    const { username, email, phone } = req.body;
    const objUser = { username, email, phone };

    // create "errors" object
    let errors = {};

    // validate username
    const usernameRegex = /^[A-Za-z\s.]+$/;
    if (!usernameRegex.test(objUser.username)) {
        errors.username = "Isi nama anda dengan benar";
    }

    // validate email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(objUser.email) || objUser.email.includes("@healthgate.com")) {
        errors.email = "Isi email anda dengan benar";
    }

    // validate phone
    let phoneValid = objUser.phone.replaceAll(" ", "");
    phoneValid = phoneValid.replace("+62", "0");
    if (phoneValid.length < 10 || phoneValid.length > 12) {
        errors.phone = "Isi nomor HP anda dengan benar";
    }

    // check data in "errors" object
    if (Object.keys(errors).length) {
        res.locals.user = req.session.user;
        console.log({ errors: errors, oldData: req.body });
        return res.render("./user/profile-edit", { errors: errors, oldData: req.body, activeRoute: {} });
    }

    next();
};

module.exports = UpdateMiddleware;
