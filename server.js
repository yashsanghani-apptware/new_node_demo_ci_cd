const express = require("express");
const app = express();

app.get("/api/get", (req, res) => {
    res.send("Hello Yash0000111111!!!!!!!!!!!!!!!");
});


app.listen(3033, () => {
    console.log("Server is running on port 3033");
});