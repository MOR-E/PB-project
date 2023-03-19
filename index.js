const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const pesagemControoler = require("./routes/weight/PesagemController");
const cadastroControoler = require("./routes/register/CadastroController");

//models
const Cadastro = require("./models/Cadastro");
const Pesagem = require("./models/Pesagem");

//View engine
app.set("view engine", "ejs");

//Static
app.use(express.static("public"));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.error(error);
    })

app.use("/", pesagemControoler);
app.use("/", cadastroControoler);

app.get("/", (req, res) => {
    res.render("index"); 
})
 

app.listen(8000, () => {
    console.log("Servidor rodando!");
})