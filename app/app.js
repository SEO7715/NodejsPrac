// http 버전
// const http = require('http');
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8" });
//     // wirteHead는 정상 응답 코드를 보내주고, 한글로 변환 (charset=utf-8)
//     if (req.url === '/') {
//         res.end("여기는 루트 입니다.");
//     } else if (req.url === '/login') {
//         res.end("여기는 로그인 화면입니다.")
//     }
// });

// app.listen(3001, () => {
//     console.log('http로 가동된 서버');
// });

// 모듈

//bodyparser가 express 특정버전 이후부터 기본 포함이라, app.use(express.urlencoded({ extended: true }))로 바꿔도 동일함 
// const bodyParser = require("body-parser");

const express = require('express'); // require로 express라는 모듈 받기
// const bodyParser = require('body-parser');
const app = express(); //express 실행시켜서 app 변수에 넣어주기

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
// url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함되는 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended : true}));

app.use("/", home); // use 는 미들웨어를 등록해주는 메서드 

module.exports = app;
