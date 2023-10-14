const Sequelize = require("sequelize"),
  conexão = new Sequelize("selenia", "root", "Z16682604l", {
    host: "localhost",
    dialect: "mysql",
  });
conexão.authenticate().then(() => console.log("Coxeão bem sucedida!")),
  (module.exports = conexão);
