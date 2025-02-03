const { Pool } = require("pg");

const db = new Pool({
    host: "autorack.proxy.rlwy.net",
    user: "postgres",
    password: "hkeyBaWvLdoSTsKKVmXAMDgecfLAOmCk",
    port: 35387,
    database: "railway",
});

module.exports = db;
