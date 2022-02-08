const express = require("express");
const parser = require("body-parser");
const jwt = require("jsonwebtoken");

console.log("\nNode server starting..");
const app = express();
const port = 3003;
app.use(parser.json());

//todo data validation
//todo error handling

app.get("/", (req, res) => {
    res.send("API TESTE B9");
});

app.use("/auth", require("./auth"));

app.use("/api", (req, res, next) => {
    const token = req.headers["authorization"];
    console.log(token);
    if (token === "") return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
});
app.use("/api", require("./routes"));

app.listen(port, () => {
    console.log(`\nOK Listening to ${port}`);
});
