const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 512;

const bgImage = new Image();
bgImage.src = 'TP8-Exercice1-Documents/pelouse.png';

const spriteImage = new Image();
spriteImage.src = 'TP8-Exercice1-Documents/sprites.png';

let spriteX = 256;
let spriteY = 256;
const speed = 10;

const sWidth = 128;
const sHeight = 128;
const dWidth = 128;
const dHeight = 128;

// 0: Bas, 1: Haut, 2: Gauche, 3: Droite
let direction = 0;
let frameIndex = 0;

function draw() {
    const pattern = ctx.createPattern(bgImage, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (spriteImage.complete) {
        ctx.drawImage(
            spriteImage,
            frameIndex * sWidth, direction * sHeight,
            sWidth, sHeight,
            spriteX, spriteY,
            dWidth, dHeight
        );
    }
}

function gameLoop() {
    draw();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            spriteY -= speed;
            direction = 1;
            break;
        case 'ArrowDown':
            spriteY += speed;
            direction = 0;
            break;
        case 'ArrowLeft':
            spriteX -= speed;
            direction = 2;
            break;
        case 'ArrowRight':
            spriteX += speed;
            direction = 3;
            break;
    }
    frameIndex = (frameIndex + 1) % 4;

    // Limites canvas
    if (spriteX < 0) spriteX = 0;
    if (spriteY < 0) spriteY = 0;
    if (spriteX > canvas.width - dWidth) spriteX = canvas.width - dWidth;
    if (spriteY > canvas.height - dHeight) spriteY = canvas.height - dHeight;
});

bgImage.onload = gameLoop;
setTimeout(gameLoop, 100);
