const ValidateDoctor = (req, res, next) => {
    // destructure body and create "objUser" object
    const { username, email, phone, password } = req.body;
    const objUser = { username, email, phone, password };

    // create "errors" object
    let errors = {};

    // validate username
    const usernameRegex = /^[A-Za-z\s.]+$/;
    if (!usernameRegex.test(objUser.username)) {
        errors.username = "Isi nama anda dengan benar";
    }

    // validate email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(objUser.email)) {
        errors.email = "Isi email anda dengan benar";
    }

    // validate phone
    const phoneRegex = /^\d+$/;
    let phoneValid = objUser.phone.replaceAll(" ", "");
    phoneValid = phoneValid.replace("+62", "0");
    if (phoneValid.length >= 10 || phoneValid.length <= 12) {
        if (!phoneRegex.test(phoneValid)) {
            errors.phone = "Isi nomor HP anda dengan benar";
        }
    }

    // validate password
    if (objUser.password.length < 8) {
        errors.password = "Password minimal 8 karakter";
    }

    // check data in "errors" object
    if (Object.keys(errors).length) {
        console.log({ errors: errors, oldData: req.body });
        return res.render("./admin/addDoctorList", { errors: errors, oldData: req.body, activeRoute: "doctorList" });
    }

    next();
};

module.exports = ValidateDoctor;
