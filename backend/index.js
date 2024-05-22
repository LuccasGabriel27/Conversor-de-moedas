const express = require('express');
const aplicacao = express();
const port = 4000;

aplicacao.get('/', (req, res) => {
    res.send("Chamei o backend com sucesso")
});

aplicacao.post('/', (req, res) => {
    res.send("Chamei o backend com sucesso usando post")
});

aplicacao.get('/moedas', (req,res) => {

    const moedas = {
        BRL: "real",
        DOLAR: "dolar",
        EURO: "euro"
    }

    res.status(200).json(moedas);

});

aplicacao.get('/info', (req,res) => {
    res.send("Informação sobre o sistema");
});

aplicacao.post('/moedas', (req,res) => {

    const moedas = {
        BRL: "real",
        DOLAR: "dolar",
        EURO: "euro"
    }

    res.status(200).json(moedas);

});

aplicacao.get('/info', (req,res) => {

    const informacoes = {
        version: "1.0",
        author: "Luccas",
        update: "Maio de 2024",
        price: "free",
        license: "ABC"
    }
    
res.status(200).json(moedas);

});

aplicacao.get('/conversao/ :moedas', (req, res) => {

    //  processo de conversao
    let moedas = req.params.moedas.split("-");
    let moeda1 = moeda[0];
    let moeda2 = moeda[1];

    console.log(moeda1);
    console.log(moeda2);

    conversao = {};
    res.status(200).json(conversao);

})


// Aplicação ouvindo a porta 4000
aplicacao.listen(port, () => {
    console.log("Escutando na porta 4000")
});
