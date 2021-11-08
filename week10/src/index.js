import express from "express";  //모듈 불러오기
import logger from "morgan";
import path from "path";

import loginRouter from "../routes/login";  //모듈 불러오기 
import selectRouter from "../routes/select";//사용자가 만든 폴더는 경로 지정
import deleteRouter from "../routes/delete";    

const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', loginRouter);
app.use('/select', selectRouter);
app.use('/delete', deleteRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

