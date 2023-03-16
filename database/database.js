const Sequelize = require("sequelize");

const connection = new Sequelize('pb_projeto','root','abc@123', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection