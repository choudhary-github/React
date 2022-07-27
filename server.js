const express = require("express");
const app = express();

app.post("/post", (req, res) => {
console.log("Connected to React");
res.redirect("/");
});

// const PORT = process.env.PORT || 3001;

app.listen(3001, console.log('Server started on port http://localhost:3001'));
