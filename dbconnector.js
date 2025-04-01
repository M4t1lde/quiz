const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "matilde",
  password: "1487",
  database: "quiz",
  connectionLimit: 5,
});

async function query(sql, params) {
  let connection;
  try {
    connection = await pool.getConnection();
    const res = await connection.query(sql, params);
    return res;
  } catch (error) {
    throw error;
  } finally {
    if (connection) connection.release();
  }
}

module.exports = { query };
