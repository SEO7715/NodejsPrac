"use strict";

const { use } = require(".");
const User = require("../../models/User");

const output = {
    hello : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
    register : (req, res) => {
        res.render("home/register");
    }
};

const processs = {
    login : (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

module.exports = {
    output,
    processs,
};
