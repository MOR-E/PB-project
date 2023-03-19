const Sequelize = require("sequelize");
const connection = require("../database/database");

const Pesagem = connection.define("pesagem", {
     peso: {
        type: Sequelize.DOUBLE,
        allowNull: true
    }, data_pesagem: {
        type: Sequelize.DATE,
        allowNull: true
    }
})

Pesagem.sync({force: true}); // Força de sincronização

module.exports = Pesagem;