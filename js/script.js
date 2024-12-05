const nav = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener("click",() => {
    nav.classList.toggle('active')
})