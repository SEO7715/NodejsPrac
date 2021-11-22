"use strict";

const id = document.querySelector("#id"), 
      name = document.querySelector("#name"),
      password = document.querySelector("#password"),
      checkPassword = document.querySelector("#check-password"),
      registerBtn = document.querySelector("#button");
      
registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해주세요");
    if (password != checkPassword) return alert("비밀번호가 일치하지 않습니다.");
    const req = {
        id : id.value,
        name : name.value,
        password : password.value,
    };
    console.log(req);

    // console.log(JSON.stringify(req)) // 문자열로 감싸져 있음

    // 브라우저에 있는 로그인 정보를 fetch()를 통해 서버에 전달 
    fetch("register", { // 첫번째 인자 uri는 로그인 경로, 두번째 인자는 전달할 데이터(object 형태)
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req), // body로 데이터 전달
    })

    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    });
}
