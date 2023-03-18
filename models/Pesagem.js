const Sequelize = require("sequelize");
const connection = require("../database/database");

const Pesagem = connection.define("pesagem", {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }, peso: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }, data_pesagem: {
        type: Sequelize.DATE,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//Pesagem.sync({force: true}); // Força de sincronização

module.exports = Pesagem;