let cronometro = document.querySelector('#crono');
let buttonStart = document.querySelector('#start');
let buttonStoped = document.querySelector('#stoped');
let hours = 0;
let min = 0;
let sec = 0;
let timer;

function interval() {
    
}
function start() {
    contagem();
    timer = setInterval(contagem,1000);
    buttonStart.disabled = true;
}

function stoped() {
    clearInterval(timer);
    buttonStart.disabled = false;
}

function restore() {
    clearInterval(timer);
    hours = 0;
    min = 0;
    sec = 0;
    cronometro.innerText = `00:00:00`;
    buttonStart.disabled = false;
}

function contagem() {
    sec++;
    if(sec === 60) {
        sec = 0;
        min++;
        if(min === 60) {
            sec = 0;
            min = 0;
            hours++;
        }
    }
    cronometro.innerText = `${String(hours).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

