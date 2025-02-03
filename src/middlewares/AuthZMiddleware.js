const AuthZMiddleware = (req, res, next) => {
    if (req.session.user) {
        res.locals.user = req.session.user;
        
        const { role } = req.session.user;
        const originalUrl = req.originalUrl;

        console.log("🚀 ~ AuthZMiddleware ~ req.session.user:", req.session.user);

        if (role === "admin" && !originalUrl.startsWith("/admin")) {
            return res.redirect("/admin");
        }
        
        // doctor
        if (role === "doctor" && !originalUrl.startsWith("/doctor")) {
            return res.redirect("/doctor");
        }
        
        
        //user
        return next();
    } else {
        return res.redirect("/login");
    }
};

module.exports = AuthZMiddleware;
