// main.js
"use strict";
// BEST 습관 : 먼저 모든 상수나 변수 정의(const)
// @TODO: 웹 서버를 만들고 실행한다.
const port = 3000,
    express = require('express'),
    layouts = require('express-ejs-layouts'),
    homeController = require('./controllers/homeController'),
    errorController = require('./controllers/errorController'),
    app = express();

    //BEST 습관 : 2단계 앱 설정( set 함수, 그다음에 use 함수)
app.set("port", process.env.PORT || port);
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.static("public"));



//Aaron 습관 : GET 라우트 먼저 그 다음에 POST 라우트
// app.get("/", homeController.getHome);
app.get("/name/:myName", homeController.respondWithName);
app.get("/test", (req, res) =>{
    res.sendFile("./public/test.html");
});

// errorController app.use() , 순서때문에 errorController app.use는 거의 마지막 (listen전!)
app.use(errorController.logErrors);
app.use(errorController.resNotFound); // 404
app.use(errorController.resInternalError); // 500 , 500에러는 항상 마지막 (Last error)

    //BEST 습관 : 마지막 listen 함수

app.listen(app.get("port"), () => {
    console.log(`server at: http://localhost:${app.get("port")}`);

});