import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) =>{
    const department = await selectSql.getDepartment();
    const site = await selectSql.getSite();

    res.render('delete',{
        title: "삭제 기능",
        department,
        site
    })
});

router.post('/', async (req, res) => {

    const data={
        Sname: req.body.delBtn1,        //delete.hbs에서 delBtn1을 받아서
    }                                   //data.Sname에 넣어줍니다.

    await deleteSql.deleteSite(data);   

    res.redirect('/delete');
});

module.exports = router;