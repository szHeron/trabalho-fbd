const mysql = require("mysql");
const util = require("util");

const db = mysql.createConnection({
  user: "sql10464672",
  host: "sql10.freemysqlhosting.net",
  password: "zXXJnS4Y3T",
  database: "sql10464672",
});

const query = util.promisify(db.query).bind(db);

module.exports = query;
