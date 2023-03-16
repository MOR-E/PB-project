const Sequelize = require("sequelize");
const connection = require("../database/database");

const Pesagem = connection.define("pesagem", {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false
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

module.exports = Pesagem;