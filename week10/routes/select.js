import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function (req, res){
    const department = await selectSql.getDepartment();
    const site = await selectSql.getSite();
    res.render('select', {      //hbs파일 select를 불러옵니다.
        title: 'IT 공대',
        title2: 'Site',
        department,
        site
    });
});

module.exports = router;