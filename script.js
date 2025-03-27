document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("[data-aos]");

    function checkVisibility() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Empêche le saut instantané
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Ajuste pour éviter que le titre soit trop haut
                    behavior: "smooth" // Défilement fluide
                });
            }
        });
    });
});
