let caixa = document.getElementById('caixa');
let surdo = document.getElementById('surdo');
let prato = document.getElementById('prato');
let bumbo = document.getElementById('bumbo');
let chimbau = document.getElementById('chimbau');

function executaEfeitoSonoro(nome, extensao = 'wav', loop = false) {
    const efeitoSonoro = new Audio(`media/${nome}.${extensao}`);
    efeitoSonoro.loop = loop;
    efeitoSonoro.play();
}

function executaAnimacao(nomeElemento) {
    let elemento;
    switch(nomeElemento) {
        case 'caixa':
            elemento = caixa;
            break;
        case 'chimbau':
            elemento = chimbau;
            break;
        case 'bumbo':
            elemento = bumbo;
            break;
        case 'surdo':
            elemento = surdo;
            break;
        case 'prato':
            elemento = prato;
    }

    elemento.setAttribute('src', `img/${nomeElemento}-on.png`);
    setTimeout(() => {
        elemento.setAttribute('src', `img/${nomeElemento}-off.png`);
    }, 100);
}

document.addEventListener('keypress', (e) => {
    console.log(e.keyCode);
    switch(e.keyCode) {
        case 97:
            executaEfeitoSonoro('kick-plain');
            executaAnimacao('bumbo');
            break;
        case 115:
            executaEfeitoSonoro('Snare - Analog');
            executaAnimacao('caixa');
            break;
        case 100:
            executaEfeitoSonoro('tom-fm');
            executaAnimacao('surdo');
            break;
        case 108:
            executaEfeitoSonoro('crash-808');
            executaAnimacao('prato');
            break;
        case 107:
            executaEfeitoSonoro('hihat-digital');
            executaAnimacao('chimbau');
    }
});