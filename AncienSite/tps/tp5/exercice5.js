/* exercice5.js */

// 1. Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM chargé, injection des éléments de navigation...");

    // --- A. INJECTION DU BOUTON RETOUR (En haut) ---
    
    // Création du conteneur pour le bouton
    const retourContainer = document.createElement("div");
    retourContainer.className = "container-nav"; // J'utilise une classe spécifique pour le CSS
    retourContainer.style.marginTop = "20px";
    retourContainer.style.marginBottom = "20px";
    retourContainer.style.paddingLeft = "20px"; // Un peu d'espace si pas de container global

    // Le HTML du bouton
    retourContainer.innerHTML = '<a href="../../index.html" class="btn">← Retour</a>';

    // Insertion au tout début du body
    document.body.prepend(retourContainer);


    // --- B. FONCTIONNALITÉ STICKY (Si tu veux garder l'effet visuel bonus) ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.opacity = "0.95";
        } else {
            header.style.opacity = "1";
        }
    });


    // --- C. INJECTION DE L'ANALYSE (En bas) ---

    // Création de la section analyse
    const analyseSection = document.createElement("section");
    analyseSection.className = "container analyse-reflexive reveal";
    analyseSection.style.marginTop = "50px";
    analyseSection.style.padding = "20px";
    analyseSection.style.backgroundColor = "#fff"; // Pour s'assurer qu'on lit bien
    analyseSection.style.borderTop = "1px solid #ccc";

    // Le HTML de ton analyse (Tu peux modifier le texte ici)
    analyseSection.innerHTML = `
        <h2>Analyse</h2>
        <div class="card">
            <h3>Technique utilisée : Position Sticky</h3>
            <p>
                Pour répondre à la consigne de l'exercice 5 du TP5 ("menu collé"), j'ai utilisé la propriété CSS 
                <code>position: sticky; top: 0;</code> sur l'élément <code>header</code>.
            </p>
            <p>
                <strong>Contrainte respectée :</strong> Comme il était interdit de modifier le fichier HTML fourni, 
                j'ai dû ruser ! Ce bloc d'analyse et le bouton "Retour" que vous voyez ont été injectés 
                dynamiquement via JavaScript (manipulation du DOM via <code>document.body.prepend</code> et <code>append</code>), 
                ce qui permet de respecter la consigne tout en intégrant l'exercice au portfolio.
            </p>
            <h3>Difficultés / Limitations</h3>
            <p>
                La principale difficulté a été d'intégrer ma charte graphique (boutons, polices) sans toucher au HTML. 
                J'ai dû réécrire certaines règles CSS dans le fichier <code>exercice5.css</code> car je ne pouvais pas lier mon fichier <code>style.css</code> principal.
            </p>
        </div>
    `;

    // Insertion tout à la fin du body
    document.body.append(analyseSection);
    
    // Si tu as besoin de l'effet d'apparition "reveal" de ton main.js, 
    // tu peux essayer de l'appeler ici, ou simplement laisser afficher en brut.
});