let pontohumano = 0;
let pontoComputador = 0;

function getComputerChoice(){
    let escolhaComputador = "";
    escolhaComputador = Math.floor(Math.random() * 3);
    if (escolhaComputador == 0){
        console.log("O computador escolheu Pedra!")
        escolhaComputador = "pedra";
    }
    else if(escolhaComputador == 1){
        console.log("O computador escolheu Papel!")
        escolhaComputador = "papel";
    }
    else {
        console.log("O computador escolheu Tesoura");
        escolhaComputador = "tesoura";
    }
    return escolhaComputador;
}

function getHumanChoice(){
    let escolhaHumano = prompt("Escolha entre 'pedra', 'papel' ou 'tesoura'");
    return escolhaHumano.toLowerCase();
}

function playGame(){
    let escolhaHumano = getHumanChoice();
    let escolhaComputador = getComputerChoice();

    if (escolhaHumano == "pedra" && escolhaComputador == "tesoura"){
        pontohumano++;
        console.log("Um ponto para você!");
    }
    else if(escolhaHumano == "papel" && escolhaComputador == "pedra"){
        pontohumano++;
        console.log("Um ponto para você!");
    }
    else if(escolhaHumano == "tesoura" && escolhaComputador == "papel"){
        pontohumano++;
        console.log("Um ponto para você!");
    }
    else if(escolhaComputador == escolhaHumano){
        console.log("Empate!");
    }
    else {
        console.log("Um ponto para o computador!")
        pontoComputador++;
        console.log(pontoComputador);
    }

    if (pontohumano < 5 && pontoComputador < 5) {
        playGame();
    }
}

function Rank(){
    playGame()
    if(pontoComputador === 5){
        console.log("O computador Venceu!")
    }
    else if(pontohumano === 5){
        console.log("Parabéns, você venceu!")
    }
}

Rank();