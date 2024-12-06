//for navbar toggle
const nav = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener("click",() => {
    nav.classList.toggle('active')
});

//faq question collapse
const questionTitles = document.querySelectorAll('.question-title');

questionTitles.forEach((title) => {
    title.addEventListener("click", () => {
        const question = title.closest('.question'); 
        question.classList.toggle('active');
    });
});
