const db = require("../config/connection");
const bcrypt = require("bcrypt");
const capitalize = require("../utils/capitalize");

// iteration of hash bcrypt
const saltRounds = 10;

class Doctor {
    constructor(id, full_name, email, phone, password) {
        this.id = id;
        this.full_name = full_name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    static async change(objUser) {
        let user;
        let error = {};

        let checkQuery = "SELECT password FROM doctors WHERE id = $1 LIMIT 1";
        let updateQuery = "UPDATE doctors SET password = $2 WHERE id = $1";

        if (objUser.newPass === objUser.validatePass && objUser.newPass.length >= 8) {
            let data = await db.query(checkQuery, [objUser.id]);

            const passwordMatch = await bcrypt.compare(objUser.currentPass, data.rows[0].password);

            if (passwordMatch) {
                const paswordHash = await bcrypt.hash(objUser.newPass, saltRounds);

                await db.query(updateQuery, [objUser.id, paswordHash]);
                return { user, error };
            } else {
                error.currentPass = "Masukkan password lama anda dengan benar";
                return { user, error };
            }
        } else {
            error.newPass = "Masukkan password baru anda dengan benar";
            return { user, error };
        }
    }
}

module.exports = Doctor;
