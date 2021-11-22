"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        // const body = body;
        this.body = body;
    }

    login() {
        const client = this.body;
        const { id, password } = UserStorage.getUserInfo(client.id);
        // 스토리지에서 가져온 id/ 패스워드와 client가 입력한 id/패스워드가 같은지 확인
        if (id) {
            if (id === client.id && password === client.password) {
                return {success : true};
        } //id가 있는데 정보가 맞지 않는 경우
            return { successs : false, msg : "비밀번호가 틀렸습니다."};
        } 
        return { success : false, msg : "존재하지 않는 아이디입니다."};
    }

    register() {
        const client = this.body;
        UserStorage.save(client); // 데이터를 스토리지에 저장
        return res.json(response);
    }
}

module.exports = User;