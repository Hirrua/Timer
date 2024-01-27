const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function pegaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {hour12: false, timeZone:'UTC'});
}

function criaCronometro() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = pegaSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function(event) {
    const el = event.target;

    if(el.classList.contains('iniciar')) {
        clearInterval(timer);
        criaCronometro();
    }

    if(el.classList.contains('pausar')) {
        clearInterval(timer);
    }

    if(el.classList.contains('zerar')) {
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = pegaSegundos(segundos);
    }
})