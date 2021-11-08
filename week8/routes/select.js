import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function (req, res){
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();

    res.render('select', {
        title: '���� ���̺�',
        title2: '�μ� ���̺�',
        employee,
        department
    });
});

module.exports = router;