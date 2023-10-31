const Sequelize = require("sequelize"),
  conexão = new Sequelize("nomeDataBase", "user", "password", {
    host: "localhost",
    dialect: "mysql",
  });

module.exports = conexão;
