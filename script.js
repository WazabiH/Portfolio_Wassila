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


// SELECTION NAV DYAMIQUE //

document.addEventListener("DOMContentLoaded", function() {
    const filters = document.querySelectorAll(".projet-nav a");
    const sections = document.querySelectorAll(".grid");

    filters.forEach(filter => {
        filter.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("data-filter");

            if (targetId === "all") {
                // Afficher tous les projets
                sections.forEach(section => {
                    section.classList.add("active");
                });
            } else {
                // Masquer tous les projets
                sections.forEach(section => {
                    section.classList.remove("active");
                });

                // Afficher uniquement la catégorie sélectionnée
                document.getElementById(targetId).classList.add("active");
            }
        });
    });

    // Activer par défaut "Tous les projets"
    sections.forEach(section => section.classList.add("active"));
});

const carousel = document.querySelector('.carousel');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    scrollAmount += 320; // Ajuste en fonction de la taille des cartes
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= 320;
    if (scrollAmount < 0) scrollAmount = 0;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
});




    window.addEventListener("load", function () {
        let loader = document.getElementById("loader");

        // Attendre la fin du GIF (ajuste le temps selon la durée de ton GIF)
        setTimeout(() => {
            loader.classList.add("fade-out");
        }, 3000); // Change 3000 par la durée réelle du GIF en millisecondes
    });





