// Variables
const canvas = document.getElementById('gameCanvas'); // ID corrigé dans HTML
const ctx = canvas.getContext('2d');

// Canvas dimensions 512x512 per PDF
canvas.width = 512;
canvas.height = 512;

// Images
// Images
const bgImage = new Image();
bgImage.src = 'TP8-Exercice1-Documents/pelouse.png';

const spriteImage = new Image();
spriteImage.src = 'TP8-Exercice1-Documents/sprites.png';

// Sprite state
let spriteX = 256; // Centre
let spriteY = 256;
const speed = 10;
// Taille du personnage dans le sprite (Source) et sur l'écran (Dest)
// Framing issue fix: Adjust these values to match the sprite sheet layout
const sWidth = 128; // 512px / 4 columns = 128px per frame
const sHeight = 128;
const dWidth = 128; // Keeping scale consistent
const dHeight = 128;

// Direction pour le sprite (Ligne dans le spritesheet)
// 0: Bas, 1: Gauche, 2: Droite, 3: Haut (Standard)
let direction = 0;
let frameIndex = 0;

function draw() {
    // 1. Draw Background (Cover)
    // Tiling the 256x256 texture to fill 512x512
    const pattern = ctx.createPattern(bgImage, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Draw Sprite
    // ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    // frameIndex * sWidth = Animation
    // direction * sHeight = Orientation

    // Safety check just in case image isn't loaded
    if (spriteImage.complete) {
        ctx.drawImage(
            spriteImage,
            frameIndex * sWidth, direction * sHeight, // Source X, Y
            sWidth, sHeight,                          // Source W, H
            spriteX, spriteY,                         // Dest X, Y
            dWidth, dHeight                           // Dest W, H
        );
    }
}

// Loop
function gameLoop() {
    draw();
    requestAnimationFrame(gameLoop);
}

// Input
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            spriteY -= speed;
            direction = 1; // Correction: Ligne 1 = HAUT
            break;
        case 'ArrowDown':
            spriteY += speed;
            direction = 0; // Correction: Ligne 0 = BAS
            break;
        case 'ArrowLeft':
            spriteX -= speed;
            direction = 2; // Correction: Ligne 2 = GAUCHE
            break;
        case 'ArrowRight':
            spriteX += speed;
            direction = 3; // Correction: Ligne 3 = DROITE
            break;
    }
    // Simple animation toggle
    frameIndex = (frameIndex + 1) % 4; // Assuming 3-4 frames per row

    // Constraints (Ne pas sortir)
    if (spriteX < 0) spriteX = 0;
    if (spriteY < 0) spriteY = 0;
    if (spriteX > canvas.width - dWidth) spriteX = canvas.width - dWidth;
    if (spriteY > canvas.height - dHeight) spriteY = canvas.height - dHeight;
});

// Start
bgImage.onload = gameLoop;
// Fallback start if bg load fails or is cached
setTimeout(gameLoop, 100);
