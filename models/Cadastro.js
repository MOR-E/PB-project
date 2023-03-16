const Sequelize = require("sequelize");
const connection = require("../database/database");

const Cadastro = connection.define("cadastro", {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false
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

module.exports = Cadastro;