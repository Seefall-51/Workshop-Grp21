const p = document.querySelectorAll('p');
const img = document.querySelectorAll('img');
const a = document.querySelectorAll('a');
const inputSwitch1 = document.querySelector('.ipt-switch-1').addEventListener('click', blurImg);
const inputSwitch2 = document.querySelector('.ipt-switch-2').addEventListener('click', blurLink);
const inputSwitch3 = document.querySelector('.ipt-switch-3').addEventListener('click', blurText);

function blurText() {
    p.forEach(function blur(text) {
        text.classList.toggle("blurred-text");
    })
}

function blurImg() {
    img.forEach(function blur(image) {
        image.classList.toggle("blurred-img");
    })
}

function blurLink() {
    a.forEach(function blur(link) {
        link.classList.toggle("blurred-text");
    })
}