let player = document.getElementById('player');
let mainBody = document.getElementById('mainBody');
let loadingPage = document.getElementById('loading');

function volumen() {
    player.volume = '.0';
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