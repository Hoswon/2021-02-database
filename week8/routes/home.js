import express from "express";
import { insertSql, selectSql} from "../database/sql";

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('home');
});

router.post('/', (req, res) => {
    const vars=req.body;
    const var_length = Object.keys(req.body).length;

    if(var_length > 4){                
        const data = {
            Fname: vars.Fname,
            Minit: vars.Minit,
            Lname: vars.Lname,
            Ssn: vars.Ssn,
            Bdate: vars.Bdate,
            Address: vars.Address,
            Sex: vars.sex,
            Salary: vars.Salary,
            Super_ssn: vars.Super_ssn,
            Dno: vars.Dno
        };
        insertSql.setEmployee(data);
    } else {
        const data = {
            Dname: vars.Dname,
            Dnumber: vars.Dnumber,
            Mgr_ssn: vars.Mgr_ssn,
            Mgr_start_date: vars.Mgr_start_date
        };
        insertSql.setDepartment(data);
    }

    res.redirect('/');
})

module.exports = router;