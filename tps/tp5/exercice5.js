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

    // --- C. INJECTION DE L'ANALYSE (Maintenue par cohérence) ---

    // Création de la section analyse
    const analyseSection = document.createElement("section");
    analyseSection.className = "exercise-meta"; // Use standard class
    analyseSection.style.margin = "50px auto";
    analyseSection.style.maxWidth = "800px";

    analyseSection.innerHTML = `
        <div class="meta-block">
            <h4>Technique utilisée</h4>
            <p><code>position: sticky; top: 0;</code> sur le header. Le conteneur parent (.content) doit avoir un scroll défini.</p>
        </div>
        <div class="meta-block">
            <h4>Difficulté estimée</h4>
            <p>2 / 5</p>
        </div>
        <div class="meta-block">
            <h4>Intérêt pour l'apprentissage</h4>
            <p>Comprendre le contexte de défilement (Scroll Container) pour que sticky fonctionne.</p>
        </div>
         <div class="meta-block">
            <h4>Qualité du résultat</h4>
            <p>Navigation fluide.</p>
        </div>
    `;

    // Insertion à la fin du text-content
    const textContent = document.querySelector('.text-content');
    if (textContent) {
        textContent.appendChild(analyseSection);
    }
});