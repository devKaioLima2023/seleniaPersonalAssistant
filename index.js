
(()=>{
        const express = require("express");
        const app = express();
        const bodyParse = require("body-parser");
        const conexãoBanco = require("./database/database");
        const tabelaUsuario = require("./database/Usuarios");


        // Conexão Banco de Dados

        conexãoBanco.authenticate().then(()=>{console.log("Banco conectado!")}).catch(erro => console.log(erro));

        // Template Engine

        app.set("view engine", "ejs");

        // Body Parser

        app.use(bodyParse.urlencoded({ extended: false }));

        app.use(bodyParse.json());

        // Arquivos Estáticos

        app.use(express.static("public"));

        // Rotas GET

        // Rota Principal

        app.get("/", (req, res) => res.render("index"));

        // Rota Cadastro

        app.get("/cadastro", (req, res) => res.render("formularioCadastro"));

        // Rota Login

        app.get("/login", (req, res) => {
        const erro = req.query.erro;
        res.render("login", {erro: erro});
        });

        // Rotas POST

        // Rota Salva Dados Cliente no Banco de Dados

        app.post("/salvandocadastro",(req,res)=>{
        const {nome,sobrenome,email,senha} = req.body;
        tabelaUsuario.create({
            nome:nome,
            sobrenome:sobrenome,
            email: email,
            senha: senha 
        }).then(()=> res.redirect("/login"))
        });

        // Rota de Validação Login

        app.post("/seleniadownload", (req, res) => {
        const { login, senha } = req.body;
        console.log(login,senha);
        tabelaUsuario.findAll().then((usuarios) => {
            let encontrado = false;
            usuarios.forEach((usuario) => {
            login === usuario.email && senha === usuario.senha ? encontrado = true : null
            });
            encontrado ? res.render("seleniaDownload") : res.redirect("/login?erro=1");
        });
        });

        // Abrindo Servidor

        app.listen(8080, (erro) =>
        erro
            ? console.log(`Erro: ${erro}`)
            : console.log(`Servidor rodando em: http://localhost:8080/`)
        );
})();