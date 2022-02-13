let player = document.getElementById('player');
let mainBody = document.getElementById('mainBody');
let loadingPage = document.getElementById('loading');
let textHidden = document.getElementById('textHidden');
let flork = document.getElementById('flork');
let textVisible = document.getElementById('textVisible');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let buttonsContainer = document.getElementById('buttonsContainer');


function volumen() {
    player.volume = '.8';
}
volumen();


function change() {
    loadingPage.style.opacity = '0';
}

setTimeout(change, 2000);

function EliminarPantallaDeCarga() {
    loadingPage.style.display = 'none';
    mainBody.style.opacity = '1';
}

setTimeout(EliminarPantallaDeCarga, 3600);

function success() {

    button1.style.display = 'none';
    button1.style.opacity = '0';
    button2.style.display = 'none';
    button2.style.opacity = '0';

    textHidden.style.opacity = '1';
    flork.src = "img/passed.png";
    flork.style.width = "350px";
    flork.style.height = "350px";
    textVisible.style.opacity = '0';
}