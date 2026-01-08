// ex3.js (Animation Goutte)
const canvas = document.getElementById('dropCanvas');
const ctx = canvas.getContext('2d');

// Image Goutte
const dropImage = new Image();
dropImage.src = 'TP8-Exercice3-Documents/gouttes.png'; // Image fournie

// --- LOGIQUE ANIMATION ---
let isAnimating = false;
let currentFrame = 0;
let animX = 0;
let animY = 0;

// Gestion vitesse
let tickCount = 0;
const ticksPerFrame = 8; // Ralenti (était 4) pour mieux voir l'animation
const maxFrames = 13; // 0 à 12 dans infoSprite

// Gestion du click
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();

    // Calcul de l'échelle si le canvas CSS != Canvas réel
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    // Coordonnées clic ajustées
    animX = (e.clientX - rect.left) * scaleX;
    animY = (e.clientY - rect.top) * scaleY;

    // Reset animation
    currentFrame = 0;
    tickCount = 0;
    isAnimating = true;
});

function animate() {
    // 1. Nettoyer
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Fond Bleu (Couleur PDF approx)
    ctx.fillStyle = "#006994";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 3. Dessiner Animation
    if (isAnimating && dropImage.complete) {
        // Récupérer infos frame courante depuis infoSprite (global)
        // Vérif sécurité si infoSprite existe
        if (typeof infoSprite !== 'undefined' && infoSprite[currentFrame]) {
            const f = infoSprite[currentFrame];

            // Dessiner
            // Centrer l'image sur le click : dx = animX - w/2
            ctx.drawImage(
                dropImage,
                f.x, f.y, f.w, f.h,       // Source (SpriteSheet)
                animX - f.w / 2, animY - f.h / 2, // Dest (Canvas centré)
                f.w, f.h                  // Taille originale
            );

            // Avancer animation
            tickCount++;
            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                currentFrame++;

                // Fin animation ?
                if (currentFrame >= maxFrames) {
                    isAnimating = false;
                    currentFrame = 0;
                }
            }
        }
    }

    requestAnimationFrame(animate);
}

// Lancer la boucle
dropImage.onload = animate;
// Fallback si déjà chargé
if (dropImage.complete) animate();
