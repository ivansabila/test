const db = require("../config/connection");
const bcrypt = require("bcrypt");
const capitalize = require("../utils/capitalize");

// iteration of hash bcrypt
const saltRounds = 10;

class User {
    constructor(id, full_name, email, phone, password) {
        this.id = id;
        this.full_name = full_name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    static async add(objUser) {
        // create "errors" object
        let errors = {};

        // query postgreSQL
        let checkQuery = "SELECT * FROM users WHERE email = $1 LIMIT 1";
        let insertQuery = "INSERT INTO users (full_name, email, phone, password, image, role) VALUES ($1, $2, $3, $4, $5, $6)";

        // create "arrData" array from "objUser" object data
        let arrData = [objUser.username, objUser.email, objUser.phone, objUser.password, objUser.image, objUser.role];

        // run "checkQuery" query
        let check = await db.query(checkQuery, [objUser.email]);

        // check data in DB with same email
        if (check.rows.length > 0) {
            errors.email = "Akun yang anda masukkan sudah ada";
            return errors;
        } else {
            // hashing password
            arrData[3] = await bcrypt.hash(objUser.password, saltRounds);

            arrData[0] = capitalize(arrData[0]);

            // insert correct format phone to "arrData" array
            arrData[2] = arrData[2].replace("+62", "0");

            // run "insertQuery" query
            await db.query(insertQuery, arrData);
        }
    }

    static async authN(objUser) {
        let query = "SELECT * FROM users WHERE (full_name = $1 OR email = $1) LIMIT 1";

        if (!objUser.user.includes("@")) {
            objUser.user = capitalize(objUser.user);
        }

        const userData = await db.query(query, [objUser.user]);

        let user;
        let error;

        if (userData.rows.length > 0) {
            user = userData.rows[0];

            const passwordMatch = await bcrypt.compare(objUser.password, user.password);

            if (!passwordMatch) {
                error = "Masukkan akun anda dengan benar";
                return { user, error };
            } else {
                return { user, error };
            }
        } else {
            error = "Akun anda tidak ditemukan, daftar terlebih dahulu";
            return { user, error };
        }
    }

    static async update(objUser) {
        let query = "UPDATE users SET full_name = $1, email = $2, phone = $3, image = $4 WHERE id = $5";

        // create "arrData" array from "objUser" object data
        let arrData = [objUser.username, objUser.email, objUser.phone, objUser.image, objUser.id];

        arrData[0] = capitalize(arrData[0]);

        // insert correct format phone to "arrData" array
        arrData[2] = arrData[2].replace("+62", "0");

        await db.query(query, arrData);
    }

    static async show() {
        let query = "SELECT * FROM users WHERE role = 'user'";

        const data = await db.query(query);
        return data.rows
    }
}

module.exports = User;
