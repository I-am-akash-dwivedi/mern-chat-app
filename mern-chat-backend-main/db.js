const mysql = require('mysql2/promise');

async function query(sql, params) {
    const connection = await mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    });
  const [results, ] = await connection.execute(sql, params);
  return results;
}

module.exports = {
  query
}