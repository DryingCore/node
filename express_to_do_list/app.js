const express = require('express');
const checkLists = require("./src/routes/checkList");
const app = express();

app.use(express.json());
app.use("/checkList", checkLists);

app.listen(3000, () => console.log("Server is ON"));