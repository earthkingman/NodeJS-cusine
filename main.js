const homeController = require("./controllers/homeController");

const port = 3000;
const express = require('express');  //express 요청
app = express();   //express 애플리케이션의 인스턴스화

const layouts = require("express-ejs-layouts"); // express-ejs-layout의 요청
app.set("view engine", "ejs"); // ejs를 사용하기 위한 애플리케이션 세팅
app.use(layouts); //layout 모듈 사용을 위한 애플리케이션 세팅
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({extended:false})); //body-parser 추가 -> 유입되는 요청 본문을 해석하는 미들웨어로서 사용

app.get('/', (req, res)=>{
    res.send("Hi");
});

app.get("/course", homeController.showCourse); //코스 페이지, 연락처 페이지, 연락처 제출 양식을 위한 라우트의 추가
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);


app.listen(app.get("port"), ()=> {
    console.log(`Server running on port: ${app.get("port")}`);
});