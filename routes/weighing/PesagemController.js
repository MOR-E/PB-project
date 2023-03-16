const express = require("express");
const router = express.Router();

router.get("/pesagem", (req,res) => {
    res.send("Rota de pesagem");
});

router.get("/admin/pesagem/new", (req,res) => {
    res.send("Rota de cadastro de pesagem");
});

module.exports = router;
