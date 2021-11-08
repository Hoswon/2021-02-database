import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/',(req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const vars = req.body;
    const users = await selectSql.getUsers();   
    let whoAmI = '';                            
    let checkLogin = false;

//    for(let i = 0; i < users.length; i++){
//        if(vars.id===users[i].id&&vars.password===users[i].password);
//   }

    users.map((user) => {
        if(vars.id === user.Id && vars.password === user.Password){ //패스워드와 아이디 체크
            checkLogin = true;      //로그인 성공했으므로 true로 바꿔줍니다.
            if(vars.id === 'admin'){    //admin일경우
                whoAmI = 'admin';   //whoamI를 admin으로 설정
            }
            else{
                whoAmI = 'users';   //아닐경우 user로 설정
            }
        }
    })

    console.log('whoAmI:', whoAmI);

    if(checkLogin && whoAmI ==='admin'){
        res.redirect('/delete');        //admin일경우 delete페이지로 이동
    }
    else if(checkLogin && whoAmI ==='users'){
        res.redirect('/select');        //user일경우 select페이지로 이동
    }
    else{       //아닐경우 로그인에 실패했습니다.
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>")
    }

})

module.exports = router;