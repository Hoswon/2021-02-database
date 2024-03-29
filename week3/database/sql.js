import mysql from "mysql2";

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root', // λ³ΈμΈ? mysql user id
    database: 'student', // λ³ΈμΈ?΄ λ§λ  ?°?΄?°λ² μ΄?€ ?΄λ¦μΌλ‘? ?? ??Έ?
    password: '12161809', // λ³ΈμΈ? mysql password
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