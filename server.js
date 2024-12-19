const express = require("express");
const app = express();

app.get("/api/get", (req, res) => {
    res.send("Hello umang1004 jenil !!!!!!!!!!!!!!!");
});


app.listen(3033, () => {
    console.log("Server is running on port 3033");
});