let numeroSecreto  = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto!');
    }
    else {
        if(chute > numeroSecreto) { //se o chute for maior que o número secreto
            exibirTextoNaTela('h1', 'Ooops!');
            exibirTextoNaTela('p', 'O número secreto é menor!');
        }
        else { //se o chute for menor que o número secreto
            exibirTextoNaTela('h1', 'Ooops!');
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}