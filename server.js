const express = require("express");
const app = express();

app.get("/api/get", (req, res) => {
    res.send("Hello World!");
});


app.listen(3030, () => {
    console.log("Server is running on port 3030");
});