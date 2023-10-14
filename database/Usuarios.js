const Sequelize = require("sequelize"),
  conexão = require("./database"),
  Usuarios = conexão.define("usuarios", {
    nome: { type: Sequelize.STRING, allownull: !1 },
    sobrenome: { type: Sequelize.STRING, allownull: !1 },
    email: { type: Sequelize.CHAR, allownull: !1 },
    senha: { type: Sequelize.STRING, allownull: !1 },
  });
Usuarios.sync({ force: !1 }), (module.exports = Usuarios);
