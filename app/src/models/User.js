"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        // const body = body;
        this.body = body;
    }

    login() {
        const body = this.body;
        const { id, password } = UserStorage.getUserInfo(body.id);
        // 스토리지에서 가져온 id/ 패스워드와 client가 입력한 id/패스워드가 같은지 확인
        if (id) {
            if (id === body.id && password === body.password) {
                return {success : true};
        } //id가 있는데 정보가 맞지 않는 경우
            return { successs : false, msg : "비밀번호가 틀렸습니다."};
        } 
        return { success : false, msg : "존재하지 않는 아이디입니다."};
    }
}

module.exports = User;