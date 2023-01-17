const Pool = require("pg").Pool;

const pool = new Pool ({
  host: "localhost",
  user: "postgres",
  port: 5433,
  password: "An_26061991",
  database: "Kent"
})

module.exports = pool;
