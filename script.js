const text = document.querySelector(".about");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

const txt = document.querySelector(".skills");
const strTxt = txt.textContent;
const splitTxt = strTxt.split("");
txt.textContent = "";

for (let n = 0; n < splitTxt.length; n++) {
    txt.innerHTML += "<h2>" + splitTxt[n] + "<h2>";
}

let chrac = 0;
let tme = setInterval(tick, 50);

function tick() {
    const jk = txt.querySelectorAll('h2')[chrac];
    jk.classList.add('potfriend');
    chrac++
    if (chrac === 19) {
        comp();
        return;
    }
}

function comp() {
    clearInterval(tme);
    tme = null;
}