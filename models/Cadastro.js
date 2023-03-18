const Sequelize = require("sequelize");
const connection = require("../database/database");
const Pesagem = require("./Pesagem");

const Cadastro = connection.define("cadastro", {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }, numero: {
        type: Sequelize.STRING,
        allowNull: false
    }, sexo: {
        type: Sequelize.STRING,
        allowNull: false
    }, nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


Pesagem.belongsTo(Cadastro); // uma pesagem pertence a apenas um cadastro
Cadastro.hasMany(Pesagem);  // um cadastro tem muitas pesagens

//Cadastro.sync({force: true}); // Força de sincronização


module.exports = Cadastro;