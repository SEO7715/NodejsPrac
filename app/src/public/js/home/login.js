"use strict";

const id = document.querySelector("#id"), 
      password = document.querySelector("#password"),
      loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        password : password.value,
    };

    // console.log(JSON.stringify(req)) // 문자열로 감싸져 있음

    // 브라우저에 있는 로그인 정보를 fetch()를 통해 서버에 전달 
    fetch("/login", { // 첫번째 인자 uri는 로그인 경로, 두번째 인자는 전달할 데이터(object 형태)
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req), // body로 데이터 전달
    })

    .then((res) => res.json())
    // res.json()의 반환값은 promise
    .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    });
}
