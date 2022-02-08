const express = require("express");
const auth = express.Router();
const jwt = require("jsonwebtoken");
const userController = require("./user/controller.js");

auth.post("/signin", async (req, res) => {
    //todo data validation
    const user = req.body;
    console.log(user);
    const result = await userController.signIn(user);
    if (!result) {
        return res.sendStatus(401);
    }
    const token = jwt.sign(user, process.env.ACCESS_TOKEN);
    return res.json({ accessToken: token });
});

auth.post("/signout", async (req, res) => {
    //signout
});

module.exports = auth;
