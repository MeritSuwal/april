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

var textWrapper = document.querySelector('.intro');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.intro .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 150,
        delay: (el, i) => 100 + 30 * i
    });

var textWrapper = document.querySelector('.design');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.design .letter',
        translateX: [20, 0],
        translateZ: 0,
        opacity: [0, 0.9],
        easing: "easeOutExpo",
        duration: 150,
        delay: (el, i) => 100 + 30 * i
    });

var loader = document.getElementById('preloader');
window.addEventListener("load",
    function() {
        loader.style.display = "none";
    })



//preloader

// $('.js-preloader').preloadinator();

// $('.js-preloader').preloadinator({
//     scroll: false
// });

// $('.js-preloader').preloadinator({
//     minTime: 2000
// });

// $('.js-preloader').preloadinator({
//     animation: 'fadeOut',
//     animationDuration: 400
// });

// $('.js-preloader').preloadinator({
//     afterDisable < a href = "https://www.jqueryscript.net/tags.php?/Scroll/" > Scroll < /a>: function() {},
//     afterEnableScroll: function() {},
//     afterRemovePreloader: function() {}
// });