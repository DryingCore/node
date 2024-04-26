const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log("I am a route")
    res.send()
})

module.exports = router