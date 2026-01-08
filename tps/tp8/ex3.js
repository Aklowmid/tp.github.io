const canvas = document.getElementById('dropCanvas');
const ctx = canvas.getContext('2d');

const dropImage = new Image();
dropImage.src = 'TP8-Exercice3-Documents/gouttes.png';

let isAnimating = false;
let currentFrame = 0;
let animX = 0;
let animY = 0;

let tickCount = 0;
const ticksPerFrame = 8;
const maxFrames = 13;

canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    animX = (e.clientX - rect.left) * scaleX;
    animY = (e.clientY - rect.top) * scaleY;

    currentFrame = 0;
    tickCount = 0;
    isAnimating = true;
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#006994";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (isAnimating && dropImage.complete) {
        if (typeof infoSprite !== 'undefined' && infoSprite[currentFrame]) {
            const f = infoSprite[currentFrame];

            ctx.drawImage(
                dropImage,
                f.x, f.y, f.w, f.h,
                animX - f.w / 2, animY - f.h / 2,
                f.w, f.h
            );

            tickCount++;
            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                currentFrame++;

                if (currentFrame >= maxFrames) {
                    isAnimating = false;
                    currentFrame = 0;
                }
            }
        }
    }

    requestAnimationFrame(animate);
}

dropImage.onload = animate;
if (dropImage.complete) animate();
