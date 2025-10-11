const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// counter service js

const counters = document.querySelectorAll('.counter');
const speed = 300; // smaller = faster

  const startCounting = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
  counter.innerText = Math.ceil(count + increment);
  setTimeout(updateCount, 20);
} else {
  counter.innerText = target + "+";
}
      };

      updateCount();
    });
  };

  // Use Intersection Observer so it starts only when visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting();
        observer.disconnect(); // run once
      }
    });
  });

  observer.observe(document.querySelector('.stats-section'));