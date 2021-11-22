"use strict";

class UserStorage {
    // #변수명 --> 숨김처리
    static #users = {
        id : ['aaa', 'bbb', 'ccc'],
        password : ['111', '222', '333'],
        name : ['우리밋', '나개발', '김팀장']
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            // reduce() fields에 대한 원소 하나씩 순회 
            // newUsers에는 fields라는 배열의 초기값이 들어오게 되고, 
            // 다음 변수들은, field는 순회한 값들이 들어감
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, password, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        // console.log(userInfo); { id: 'aaa', password: '111', name: '우리밋' }
        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success : true};
    }
}

module.exports = UserStorage;