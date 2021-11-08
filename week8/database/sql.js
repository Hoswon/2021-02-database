import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: 'angrid55',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0

    }
);

const promisePool = pool.promise();

export const selectSql = {
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    },
    getDepartment : async() => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows
    },
}

export const insertSql = {

    setEmployee : async (data) => {
        const sql = `insert into employee values(
            "${data.Fname}","${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}"
            , "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;
        await promisePool.query(sql);
    },
    setDepartment : async(data) => {
        const sql = `insert into department values (
            "${data.Dname}",, "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;
            
            await promisePool.query(sql);
        },
}
export const updateSql = {
    updateEmployee : async () =>{
        const sql = `update employee set salary = 500 where Minit = "F"`;
        await promisePool.query(sql);
    },
    updateDepartment : async(data) => {
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 0`;
        
        await promisePool,query(sql);
    },
}
