document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('nextBtn');
    const title = document.getElementById('figureTitle');

    // Liste des figures
    const figures = [
        { func: drawTarget, name: "Figure 1 : La Cible" },
        { func: drawCheckerboard, name: "Figure 2 : Le Damier" },
        { func: drawCurve, name: "Figure 3 : Courbe (String Art)" },
        { func: drawChickenFinal, name: "Figure 4 : La Poule (Modèle Exact)" }
    ];

    let currentIndex = 0;

    function render() {
        // 1. On nettoie tout
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 2. On met à jour le titre
        title.textContent = figures[currentIndex].name;
        // 3. On dessine
        figures[currentIndex].func(ctx);
    }

    btn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= figures.length) currentIndex = 0;
        render();
    });

    // Premier affichage
    render();
});

/* --- FONCTIONS DE DESSIN --- */

function drawTarget(ctx) {
    const center = 100;
    for (let r = 100; r > 0; r -= 10) {
        ctx.beginPath();
        ctx.arc(center, center, r, 0, Math.PI * 2);
        if (r === 10) ctx.fillStyle = "#e74c3c";
        else if ((r / 10) % 2 === 0) ctx.fillStyle = "#2c3e50";
        else ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
    }
}

function drawCheckerboard(ctx) {
    const size = 25;
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            if ((row + col) % 2 !== 0) {
                ctx.fillStyle = "#2c3e50";
                ctx.fillRect(col * size, row * size, size, size);
            }
        }
    }
    ctx.strokeRect(0, 0, 200, 200);
}

function drawCurve(ctx) {
    const width = 200;
    const step = 5;
    ctx.beginPath();
    ctx.strokeStyle = "#e74c3c";
    for (let i = 0; i <= width; i += step) {
        ctx.moveTo(i, 0); ctx.lineTo(0, width - i);
        ctx.moveTo(width, i); ctx.lineTo(width - i, width);
    }
    ctx.stroke();
    ctx.strokeStyle = "black";
}

/* --- FIGURE 4 : POULE AVEC GRILLE (CORRECTION FINALE) --- */

function drawGrid(ctx) {
    const u = 20; // 1 carreau = 20px
    ctx.beginPath();
    ctx.strokeStyle = "#ccc"; // Gris pour la grille
    ctx.lineWidth = 1;

    // Quadrillage 10x10
    for (let i = 0; i <= 200; i += u) {
        ctx.moveTo(i, 0); ctx.lineTo(i, 200); // Verticales
        ctx.moveTo(0, i); ctx.lineTo(200, i); // Horizontales
    }
    ctx.stroke();
}

function drawChickenFinal(ctx) {
    // 1. On dessine la grille en arrière-plan
    drawGrid(ctx);

    const u = 20; // Unité de grille
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2; // Trait plus épais pour le dessin
    ctx.lineJoin = "miter";

    // --- CONTOUR DU CORPS ---
    // Départ : Pointe du bec (2, 2)
    ctx.moveTo(2 * u, 2 * u);

    // Ligne horizontale jusqu'au début de la crête
    ctx.lineTo(3 * u, 2 * u);

    // Crête en forme de couronne (3 pics en W)
    ctx.lineTo(3.33 * u, 1.5 * u); // Premier pic
    ctx.lineTo(3.66 * u, 2 * u);   // Descente
    ctx.lineTo(4 * u, 1.5 * u);    // Deuxième pic
    ctx.lineTo(4.33 * u, 2 * u);   // Descente
    ctx.lineTo(4.66 * u, 1.5 * u); // Troisième pic
    ctx.lineTo(5 * u, 2 * u);      // Fin de la crête

    // Dos (diagonale puis plat)
    ctx.lineTo(6 * u, 3 * u);  // Diagonale du cou
    ctx.lineTo(9 * u, 3 * u);  // Dos plat

    // Queue (3 pointes en zigzag)
    ctx.lineTo(11 * u, 2 * u);  // Pointe haute
    ctx.lineTo(10 * u, 3 * u);  // Retour
    ctx.lineTo(11 * u, 4 * u);  // Pointe milieu
    ctx.lineTo(10 * u, 5 * u);  // Retour
    ctx.lineTo(11 * u, 6 * u);  // Pointe basse
    ctx.lineTo(9 * u, 7 * u);   // Retour vers le corps

    // Ventre plat
    ctx.lineTo(6 * u, 7 * u);

    // Diagonale de la poitrine
    ctx.lineTo(4 * u, 5 * u);

    // Ligne diagonale vers le bas du bec
    ctx.lineTo(3 * u, 4 * u);

    // Fermeture du bec (retour à la pointe)
    ctx.lineTo(2 * u, 2 * u);

    // --- DÉTAILS INTERNES ---
    // Ligne verticale du bec (séparation tête/bec)
    ctx.moveTo(3 * u, 2 * u);
    ctx.lineTo(3 * u, 4 * u);

    ctx.stroke();

    // Oeil (Point noir)
    ctx.beginPath();
    ctx.arc(3.5 * u, 2.7 * u, 3, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();

    // --- PATTES (Style Bâton) ---
    ctx.beginPath();
    ctx.lineWidth = 2;

    // Patte Gauche
    ctx.moveTo(6 * u, 7 * u);
    ctx.lineTo(6 * u, 9 * u); // Descend de 2 carreaux
    // Orteils gauche
    ctx.lineTo(5.5 * u, 9.5 * u); // Orteil gauche
    ctx.moveTo(6 * u, 9 * u);
    ctx.lineTo(6.5 * u, 9.5 * u); // Orteil droit

    // Patte Droite
    ctx.moveTo(9 * u, 7 * u);
    ctx.lineTo(9 * u, 9 * u); // Descend de 2 carreaux
    // Orteils droite
    ctx.lineTo(8.5 * u, 9.5 * u); // Orteil gauche
    ctx.moveTo(9 * u, 9 * u);
    ctx.lineTo(9.5 * u, 9.5 * u); // Orteil droit

    ctx.stroke();

    // Reset épaisseur pour la prochaine figure
    ctx.lineWidth = 1;
}