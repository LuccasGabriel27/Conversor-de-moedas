const valoresConversao = {
    real: {
        euro: 0.19,
        dolar: 0.20,
        simbolo: "R$"
    },
    dolar: {
        real: 4.99,
        euro: 0.92,
        simbolo: "US$"
    },
    euro: {
        real: 5.40,
        dolar: 1.08,
        simbolo: "€"
    }
}

const botaoInverter = document.getElementById("botao-inverter");
botaoInverter.addEventListener("click", inverter);

const botaoConverter = document.getElementById("botao-converter");
botaoConverter.addEventListener("click", converter);

const botaoLimpar = document.getElementById("botao-limpar");
botaoLimpar.addEventListener("click", limpar);

const botaoAceitaMensagem = document.getElementById("botao-aceita-mensagem");
botaoAceitaMensagem.addEventListener("click", aceitarMensagem);

if(localStorage.getItem("aceitouCookie") == "1"){
    const divMensagemUsuario = document.getElementById("mensagem-usuario");
    divMensagemUsuario.classList.add("oculto");
}

function aceitarMensagem() {
    const divMensagemUsuario = document.getElementById("mensagem-usuario");
    divMensagemUsuario.classList.add("oculto")

    localStorage.setItem("aceitouCookie", "1");
}


let valorUsuario = document.getElementById("valorEntrada");
valorUsuario.addEventListener("keypress", function (event) {

    if (event.ctrlKey == true && event.key == "L") {
        event.preventDefault();
        limpar();
    }

    if (event.ctrlKey == true && event.code == "KeyI") {
        event.preventDefault();
        inverter();
    }

    if (event.ctrlKey == true && event.code == "KeyL") {
        event.preventDefault();
        limpar();
    }


    if (event.key == "Enter") {
        event.preventDefault();
        converter();
    }
});


function converter() {
    let valorUsuario = document.getElementById("valorEntrada").value

    if (valorUsuario <= 0) {
        alert("Valor não suportado");
        return;
    }

    let moeda1 = document.getElementById("moeda1").value
    let moeda2 = document.getElementById("moeda2").value

    if (moeda1 == moeda2) {
        alert("As moedas são iguais !!");
        return;
    }


    let simbolo = valoresConversao[moeda2]["simbolo"];

    let resultado = valorUsuario * valoresConversao[moeda1][moeda2];
    console.log(resultado);

    let paragrafoResultado = document.getElementById("resultado")
    paragrafoResultado.textContent = simbolo + " " + resultado.toFixed(2);

    let obejetoResultado = {
        valorDoUsuario: valorUsuario,
        valorMoeda1: moeda1,
        valorMoeda2: moeda2,
        valorResultado: resultado
    }
    
    console.log(obejetoResultado);
    localStorage.setItem("historico",obejetoResultado);

}


function salvarResultadoNoLocalStorage(resultado){

}

function limpar() {
    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = "";

    let valorEntrada = document.getElementById("valorEntrada");
    valorEntrada.value = "";

}

function inverter() {
    let valorMoeda1 = document.getElementById("moeda1").value;
    let valorMoeda2 = document.getElementById("moeda2").value;

    document.getElementById("moeda1").value = valorMoeda2;
    document.getElementById("moeda2").value = valorMoeda1;
}