const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext('2d');

// animation 1
const circle = {
    x: 200,
    y: 200,
    radius: 30,
    x_increment: 5,
    y_increment: 4
};

function drawCircle() {
    ctx.beginPath();

    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);

    ctx.fillStyle = 'orange';

    ctx.fill();
}

function update() {
    // clear the canvas after each animation
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    drawCircle();

    // change circle's position
    circle.x += circle.x_increment; // move horizontally (left -> right)
    
    circle.y += circle.y_increment; // move vertically (top -> down)

    // detect side walls/collision detection
    if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
        // negative (-): move horizontally left | positive (+): move horizontally right
        circle.x_increment *= -1; 
    }

    if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
        // negative (-): move upward | positive (+): move downward
        circle.y_increment *= -1; 
    }

    requestAnimationFrame(update); // for animation
}

update();