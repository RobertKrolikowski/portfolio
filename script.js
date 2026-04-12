const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 50) {
            el.classList.add('visible');
        }
    });
});

const year = new Date().getFullYear();
document.getElementById("year").textContent = year;