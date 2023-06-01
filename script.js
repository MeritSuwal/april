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


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var bout = document.getElementById("about");
// bout.innerHTML = `<a href="https://www.google.com">${bout.innerHTML}</a>`;
bout.onclick = function() {
    modal.style.display = "block";
}

// const myDiv = document.getElementsByClassName("about");
// const children = myDiv.children;
// for (let i = 0; i < children.length; i++) {
//     const child = children[i];
//     child.innerHTML = `<a href="https://www.google.com">${child.innerHTML}</a>`;
// }