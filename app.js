// Variáveis do jogo 
let listaNumSorteados = [];
let numeroLimite = 10;
let chute = document.querySelector('input');
let tentativas = 1;
let numeroSecreto = numeroRandom();

function exibirTexto (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}
exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}





function verificarChute() {
   let chute = document.querySelector('input').value;

   if (chute == numeroSecreto){
    exibirTexto('h1', 'Você acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} 
    ${palavraTentativa}!`;
    exibirTexto('p', mensagemTentativas);
    let newGame = document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
        if (chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
   }
}

function numeroRandom(){
    let quantidadeElementosLista = listaNumSorteados.length;
    if (quantidadeElementosLista == 10){
        listaNumSorteados = [];
    }
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if (listaNumSorteados.includes(numeroEscolhido)){
        return numeroRandom();
    } else {
        listaNumSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    numeroSecreto = numeroRandom();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    let newGame = document.getElementById('reiniciar').setAttribute('disabled', true);
}