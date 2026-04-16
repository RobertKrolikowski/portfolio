const fadeElements = document.querySelectorAll(".fade-in");

const setupFadeIn = () => {
  if (!fadeElements.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    fadeElements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  document.body.classList.add("has-animations");

  // Reveal more content at start on desktop to avoid the "empty page" effect.
  const initialRevealRange = isMobile
    ? window.innerHeight * 0.8
    : window.innerHeight * 1.3;

  fadeElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < initialRevealRange) {
      el.classList.add("visible");
    }
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: isMobile ? 0.12 : 0.2,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  fadeElements.forEach((el) => {
    if (!el.classList.contains("visible")) {
      observer.observe(el);
    }
  });
};

setupFadeIn();

const setupDropdowns = () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  if (!dropdowns.length) {
    return;
  }

  const closeAll = () => {
    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector(".dropbtn");
      dropdown.classList.remove("open");
      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  };

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(".dropbtn");

    if (!trigger) {
      return;
    }

    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = dropdown.classList.contains("open");
      closeAll();

      if (!isOpen) {
        dropdown.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      closeAll();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAll();
    }
  });
};

setupDropdowns();

const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

const counters = document.querySelectorAll(".counter");

const speed = 100; // im mniejsza liczba tym szybciej

const animateCounters = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const suffix = counter.getAttribute("data-suffix") || "";
    const divide = +counter.getAttribute("data-divide") || 1;
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

window.addEventListener("scroll", () => {
  const section = document.querySelector(".stats");

  if (!started && section) {
    const position = section.getBoundingClientRect().top;

    if (position < window.innerHeight - 50) {
      animateCounters();
      started = true;
    }
  }
});
