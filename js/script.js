//for navbar toggle
const nav = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener("click",() => {
    nav.classList.toggle('active')
});

//for FAQ toggle
const question = document.querySelector('.question');
const questionTitle = document.querySelector('.question-title');
