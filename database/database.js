const Sequelize = require("sequelize"),
  conexão = new Sequelize("selenia", "root", "root", {
    host: "localhost",
    dialect: "mysql",
  });

module.exports = conexão;
