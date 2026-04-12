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

const counters = document.querySelectorAll('.counter');

const speed = 100; // im mniejsza liczba tym szybciej

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || "";
        const divide = +counter.getAttribute('data-divide') || 1;
        let count = 0;

        const updateCount = () => {
            const increment = target / speed;

            if (count < target) {
                count += increment;

                const displayValue = (count / divide).toFixed(divide > 1 ? 1 : 0);
                counter.innerText = displayValue + suffix;

                setTimeout(updateCount, 20);
            } else {
                const finalValue = (target / divide).toFixed(divide > 1 ? 1 : 0);
                counter.innerText = finalValue + suffix;

                counter.classList.add("bounce");

                // opcjonalnie: usuń klasę po animacji (żeby można było użyć ponownie)
                setTimeout(() => {
                    counter.classList.remove("bounce");
                }, 400);
            }
        };

        updateCount();
    });
};

// uruchom przy scrollu (raz)
let started = false;

window.addEventListener('scroll', () => {
    const section = document.querySelector('.stats');

    if (!started && section) {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 50) {
            animateCounters();
            started = true;
        }
    }
});