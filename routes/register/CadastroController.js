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
    var numero = req.body.numero;
    var sexo = req.body.sexo;
    var nascimento = req.body.nascimento;

    if(numero, sexo, nascimento != undefined){

        Cadastro.create({
            numero: numero,
            sexo: sexo,
            nascimento: nascimento
        }).then(() => {
            res.redirect("/");
        })

    } else {
        res.redirect("/admin/cadastro/new");
    }

});

router.get("/admin/cadastro", (req, res) => {
    Cadastro.findAll().then(cadastros => {
        res.render("admin/cadastro/index", {cadastros: cadastros});
    });
});

router.post("/cadastros/delete", (req, res) => {
    var id =req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            Cadastro.destroy({
                where: {
                    id: id
                }
            }).then(()=> {
                res.redirect("/admin/cadastro")
            })
        }else {
            res.redirect("/admin/cadastro")
        }
    }else {
        res.redirect("/admin/cadastro")
    }
});

router.get("/admin/cadastro/edit/:id", (req, res) => {
    var id = req.params.id;

    if(isNaN(id)){
        res.redirect("/admin/cadastro")
    }

    Cadastro.findByPk(id).then(cadastro => {
        if(cadastro != undefined){
            res.render("admin/cadastro/edit", {cadastro: cadastro})
        }else {
            res.redirect("/admin/cadastro")
        }
    }).catch(error => {
        res.redirect("/admin/cadastro")
    })
});

router.post("/cadastro/update",(req, res) => {
    var id = req.body.id;
    var numero = req.body.numero;
    var sexo = req.body.sexo;
    var nascimento = req.body.nascimento;

    Cadastro.update({numero: numero, sexo: sexo, nascimento: nascimento}, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/cadastro");
    })
});

module.exports = router;
