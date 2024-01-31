const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Bem vindo!");
});

app.get("/sobre", function(req, res){
    res.send("Aqui é o sobre.");
});

app.get("/grimm", function(req, res){
    res.send("Esse é meu nickname :O");
});

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("<h1>Olá " + req.params.nome + "</h1>" + "<h2>Você é um " + req.params.cargo + "</h2>");
});

app.listen(8081, function(){
    console.log("Tá rodando o server!!!!")
});