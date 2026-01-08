/* exercice5.js */

// 1. Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM chargé. Le layout est maintenant géré directement en HTML.");

    // Note: Le bouton "Retour" et la Sidebar sont maintenant gérés par la structure globale (.app-container).
    // Plus besoin d'injection JS pour la navigation principale.

    // --- Fonctionnalité Visuelle Bonus ---
    const header = document.querySelector('header');

    // On écoute le scroll sur la fenêtre OU sur le main (car on a mis overflow hidden sur body/app et scroll sur main dans exo5.html)
    // Le scroll se fait maintenant dans .content
    const scrollContainer = document.querySelector('.content');

    if (scrollContainer && header) {
        scrollContainer.addEventListener('scroll', function () {
            if (scrollContainer.scrollTop > 50) {
                header.style.opacity = "0.95";
            } else {
                header.style.opacity = "1";
            }
        });
    }
});