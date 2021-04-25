const homeController = require("./controllers/homeController");
const errorController = require("./controllers/error_Controller");
const subscriberController = require("./controllers/subscribersController");
const Subscriber = require("./model/subscriber.js")

const mongoose = require("mongoose"); // 몽구스 요청
mongoose.connect("mongodb://localhost:27017/recipe_db",  // 데이터베이스 연결 설정
{useNewUrlParser: true, useUnifiedTopology: true}
);
const db = mongoose.connection;
db.once("open", ()=>{
    console.log("Successfull");
})

// var myQuery = Subscriber.findOne({
//     name : "Jon Wexler"
// })
//     .where("email", /jonjonwexler/);
// myQuery.exec((error, data)=>{
//     if (data) console.log(data);
// });

const port = 3000;
const express = require('express');  //express 요청
app = express();   //express 애플리케이션의 인스턴스화

//const layouts = require("express-ejs-layouts"); // express-ejs-layout의 요청
app.set("view engine", "ejs"); // ejs를 사용하기 위한 애플리케이션 세팅
//app.use(layouts); //layout 모듈 사용을 위한 애플리케이션 세팅 app.use-> HTTP 메소드를 사용한 모든 요청에서 실행됨
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({extended:false})); //body-parser 추가 -> 유입되는 요청 본문을 해석하는 미들웨어로서 사용
app.use(express.static("public")) //정적 에셋 제공



app.get('/', (req, res)=>{
    res.send("Hi");
});

app.get("/course", homeController.showCourse); //코스 페이지, 연락처 페이지, 연락처 제출 양식을 위한 라우트의 추가
app.get("/contact", homeController.showSignUp); 
app.post("/contact", homeController.postedSignUpForm);
app.get("/subscribers",subscriberController.getAllSubscribers);
app.get("/contact",subscriberController.getSubscriptionPage);
app.post("/subscribe", subscriberController.saveSubscriber)

// app.use(errorController.respondInternalError);
// app.use(errorController.respondNoResourceFound);

app.listen(app.get("port"), ()=> {
    console.log(`Server running on port: ${app.get("port")}`);
});