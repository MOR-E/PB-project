const express = require("express");
const router = express.Router();
const Cadastro = require("../../models/Cadastro")
const slugify = require("slugify");

router.get("/cadastro", (req,res) => {
    res.send("Rota de pesagem");
});

router.get("/admin/cadastro/new", (req,res) => {
    res.render("admin/cadastro/new");
});

router.post("/cadastro/save", (req, res) => {
    var id = req.body.id;
    var numero = req.body.numero;
    var sexo = req.body.sexo;
    var nascimento = req.body.nascimento;

    if(id, numero, sexo, nascimento != undefined){

        Cadastro.create({
            id: id,
            slug: slugify(id),
            numero: numero,
            sexo: sexo,
            nascimento: nascimento
        }).then(() => {
            res.redirect("/");
        })

    } else {
        res.redirect("/admin/category/new");
    }

});

module.exports = router;
