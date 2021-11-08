import mysql from "mysql2";

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root', // 본인?�� mysql user id
    database: 'student', // 본인?�� 만든 ?��?��?��베이?�� ?��름으�? ?��?��?��?��?��
    password: '12161809', // 본인?�� mysql password
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