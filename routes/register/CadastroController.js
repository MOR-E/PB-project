const express = require("express");
const router = express.Router();

router.get("/cadastro", (req,res) => {
    res.send("Rota de pesagem");
});

router.get("/admin/cadastro/new", (req,res) => {
    res.send("Rota de cadastro de cadastro");
});

module.exports = router;
