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




// Aplicação ouvindo a porta 4000
aplicacao.listen(port, () => {
    console.log("Escutando na porta 4000")
});
