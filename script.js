let cronometro = document.querySelector('#crono');
let buttonStart = document.querySelector('#start');
let buttonStoped = document.querySelector('#stoped');
let min = 0;
let sec = 0;
let millis = 0;
let timer;

function interval() {
    
}
function start() {
    contagem();
    timer = setInterval(contagem,10);
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
    millis+=1;
    if(millis === 100) {
        millis =0;
        sec++;
        if(sec === 60) {
            millis = 0;
            sec = 0;
            min++;
        }
    }
    cronometro.innerText = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}:${String(millis).padStart(2, '0')}`;
}

