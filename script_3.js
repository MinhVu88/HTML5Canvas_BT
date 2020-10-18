const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext('2d');

// animation 2
const img = document.querySelector('#neo');

const player = {
    width: 50,
    height: 70,
    x: 20,
    y: 200,
    speed: 10,
    x_increment: 0,
    y_increment: 0
};

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function move() {
    player.x += player.x_increment;

    player.y += player.y_increment;

    hitWalls();
}

function drawPlayer() {
    ctx.drawImage(img, player.x, player.y, player.width, player.height);
};

function hitWalls() {
    // left wall
    if(player.x < 0) {player.x = 0;}

    // right wall
    if(player.x + player.width > canvas.width) {player.x = canvas.width - player.width;}

    // top wall
    if(player.y < 0) {player.y = 0;}

    // bottom wall
    if(player.y + player.height > canvas.height) {player.y = canvas.height - player.height;}
}

function keyDown(e) {
    console.log(e.key);

    if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveRight();
    } else if(e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft();
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveUp();
    } else if(e.key === 'ArrowDown' || e.key === 'Down') {
        moveDown();
    }
}

function keyUp(e) {
    if(e.key === 'ArrowRight' || e.key === 'Right'
       || e.key === 'ArrowLeft' || e.key === 'Left'
       || e.key === 'ArrowUp' || e.key === 'Up'
       || e.key === 'ArrowDown' || e.key === 'Down') {
        player.x_increment = 0;

        player.y_increment = 0;
    }
}

function moveUp() {
    player.y_increment = -player.speed;
}

function moveDown() {
    player.y_increment = player.speed;
}

function moveLeft() {
    player.x_increment = -player.speed;
}

function moveRight() {
    player.x_increment = player.speed;
}

function update() {
    clear();

    drawPlayer();

    move();

    requestAnimationFrame(update);
};

update();

document.addEventListener('keydown', keyDown);

document.addEventListener('keyup', keyUp);