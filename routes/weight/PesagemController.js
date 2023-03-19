const express = require("express");
const router = express.Router();
const Pesagem = require("../../models/Pesagem");
const Cadastro = require("../../models/Cadastro")

router.get("/pesagem", (req,res) => {
    res.render("/admin/pesagem/index");
});

router.get("/admin/pesagem/new/:id", (req,res) => {
    var id = req.params.id;
    Cadastro.findByPk(id).then(cadastro => {
        if (cadastro != undefined){
            res.render("admin/pesagem/new", {cadastro: cadastro})
        }else {
            res.redirect("/admin/pesagem")
        }
    })
    //res.render("admin/pesagem/edit");

});

router.post("/pesagem/save", (req, res) => {
    var peso = req.body.peso
    var data_pesagem = req.body.data_pesagem;

        Pesagem.create({
            peso: peso,
            data_pesagem : data_pesagem
        }).then(() => {
            res.redirect("/");
        })

});

router.get("/admin/pesagem", (req, res) => {
    Pesagem.findAll().then(pesagem => {
        res.render("admin/pesagem/index", {pesagem: pesagem});
    });



});

module.exports = router;
