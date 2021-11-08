import mysql from "mysql2";

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root', // ë³¸ì¸?˜ mysql user id
    database: 'student', // ë³¸ì¸?´ ë§Œë“  ?°?´?„°ë² ì´?Š¤ ?´ë¦„ìœ¼ë¡? ?ˆ˜? •?•˜?„¸?š”
    password: '12161809', // ë³¸ì¸?˜ mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);

const promisePool = pool.promise();

const sql = {

  getUsers : async () => {
    const [rows] = await promisePool.query(`
      SELECT * FROM user
    `)
    
    return rows
  },
}

module.exports = sql