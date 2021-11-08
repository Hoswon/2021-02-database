import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: '12161809',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0

    }
);

const promisePool = pool.promise();

export const selectSql = {
    getUsers : async () => {
        const [rows] = await promisePool.query(`select * from user`);
        return rows
    },
    getDepartment : async() => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows
    },
    getSite : async() => {
        const [rows] = await promisePool.query(`select * from site`);

        return rows
    },
}

export const deleteSql = {
    deleteDepartment : async (data) => {
        console.log('deleteSql.deleteDepartment:', data.Dnumber);
        const sql = `delete from department where Dnumber="${data.Dnumber}"`;
        
        await promisePool.query(sql);
    },
    deleteSite : async (data1) => {     //Sname을 받아서 같은 Sname을 삭제합니다.
        const sql = `delete from site where Sname="${data1.Sname}"`;
        
        await promisePool.query(sql);
    },
}
