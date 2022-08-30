let adviceNumber;
let adviceText;
let adviceBtn;

const URL = 'https://api.adviceslip.com/advice';

const prepareDOMElements = () => {
    adviceNumber = document.body.querySelector(".advice__number")
    adviceText = document.body.querySelector(".advice__text")
    adviceBtn = document.body.querySelector(".advice__button")
}

const prepareDOMEvents = () => {
    adviceBtn.addEventListener("click", fillAdvice);
}

const fillAdvice = () => {
    fetch(URL)
        .then(res => res.json())
        .then(data => adviceText.innerHTML = data.slip.advice);

    fetch(URL)
        .then(res => res.json())
        .then(data => adviceNumber.innerHTML = "ADVICE# " + data.slip.id);

        
}

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

addEventListener("DOMContentLoaded", main);