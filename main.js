const menuEl = document.getElementById('menu');
const navEl = document.querySelectorAll('nav ul li');
const navIt = document.querySelector('nav');
menuEl.addEventListener('click', () => {
    navIt.classList.toggle('active')
    menuEl.classList.add('active');
})
navEl.forEach(items => {
    items.addEventListener('click', () => {
        navIt.classList.toggle('active');
        menuEl.classList.remove('active');
    })
})