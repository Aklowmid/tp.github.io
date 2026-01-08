// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // On cible tous les éléments qu'on veut animer
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Distance avant déclenchement

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Écouteur d'événement scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Déclencher une fois au chargement pour les éléments déjà visibles
    revealOnScroll();
});
