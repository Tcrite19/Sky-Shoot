// ----- Galaga Type game -------
// ====================== Grab Html elements Here ==============
const movement = document.querySelector('#movement');
const time = document.querySelector('#time');
const score = document.querySelector('#points');
const enemyCount= document.querySelector('#enemies');
const game = document.querySelector('#game');
const ctx = game.getContext('2d');
const testImg = document.getElementById('testImg');
const testImg2 = document.getElementById('testImg2');
const testShot = document.getElementById('test-shot');
const laserSound = document.getElementById('laser-sound');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const main = document.querySelector('#main');
const startbtn = document.getElementById('start-game');


// ====================== Make Canvas Here =====================

game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);


window.addEventListener('DOMContentLoaded', () => {
    enemies = new enemy(50, 50, testImg2, 30, 30);
    player = new plane(200, 200, testImg, 40, 40);
    //shoot = new shot(player.x, player.y, testShot, 25, 50);
});
document.addEventListener('keydown', controls);

const gameStart = () => {
    const canvasElem = document.getElementById('game');

    canvasElem.style.display = 'none';
    
    startbtn.addEventListener('click', () => {
        startbtn.style.display = 'none';
        canvasElem.style.display = 'block';
        gameTest();
    });

}

gameStart();

function gameTest() {
    const runGame = setInterval(gameLoop, 100);
}


// startbtn.addEventListener('click', (gameStarting) => {
//     window.addEventListener('DOMContentLoaded', function() {
//         enemies = new enemy(50, 50, testImg2, 40, 40);
//         player = new plane(200, 500, testImg, 50, 50);
//         //shoot = new shot(player.x, player.y, testShot, 25, 50);
//         const runGame = setInterval(gameLoop, 100);
//     });
//     document.addEventListener('keydown', controls);
// });
// ====================== Make Player Here =====================
let player;
class plane {
    constructor(x, y, image, width, height) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width;
        this.height = height;

        this.render = function() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
}



// ====================== Make Enemy Here ======================
let enemies; 
class enemy {
    constructor(x, y, image, width, height) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width;
        this.height = height;
        this.alive = true;

        this.render = function() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}

// ====================== Make Enemy Move Here =================
let enemyMovement = () => {
    
   
}

let moveEnemyRight = () => {
    enemies.x += 1;
}
let moveEnemyLeft = () => {
    enemies.x += 1;
}
// ====================== Make Controls Here ===================
function controls(x) {
    
    console.log('movement :', x.key);

    if (x.key === 'ArrowLeft' || x.key === 'a') {
        player.x - 5 >= 0 ? (player.x -= 5) : null;
    } else if (x.key === 'ArrowRight' || x.key === 'd') {
        player.x + 5 <= game.width - player.width ? (player.x += 5) : null;
    } else if (x.key === 'q') {
        shooting();
        
    }
}


// ====================== Make Timer Here ======================
let timeLeft = () => {
    let timer = setInterval(() => {
        time.textContent -= 1;
    }, 1000);

}


// ====================== Make Helper Functions Here ===========
function makeEnemies() {
    enemies.alive = false;

    setTimeout(function() {
        let randomX = Math.floor(Math.random() * (game.width - 50));

        enemies = new enemy(randomX, 50, testImg2, 30, 30);
    }, 1000)

    return true;
}

let shooting = () => {
    lsrSnd();
        shoot = new shot(player.x + 13.5, player.y - 15, testShot, 15, 15);
        let interval = setInterval(() => {
            shoot.render();
            shoot.y -= 1;
        }, 1)

        setTimeout(() => {
            clearInterval(interval)
        }, 1100);
}

function animate() {
    requestAnimationFrame(animate)
    player.render();
}
// ====================== Make Laser here =====================
let shoot;
let interval;

class shot {
    constructor(x, y, image, width, height) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width;
        this.height = height;
        this.alive = true;

        this.render = function() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}


// ====================== Make Sound Here ======================
// class sound {
//   constructor()
// }  
let lsrSnd = () => {
    let lsrSnd = new Audio('./sound-effects/laserSound.wav');
lsrSnd.playbackRate = 1;
lsrSnd.volume = 1;
lsrSnd.play();
}
// ====================== Make Game Process Here ===============
let secondTracker = 0;

function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    player.render();
    
    
    if(enemies.alive) {
        enemies.render();
        let hit = collision(shoot, enemies);
    }

    enemyMovement();
    //timeLeft();
    
    secondTracker += 100;
    if (secondTracker % 1000 === 0) {
        time.textContent -= 1;
        secondTracker = 0;
    }
    endGame()
}


// ====================== Make Collision Here ==================
    const collision = (character, target) => {
        if (!character || !target) return;

        let gotShot = (
            character.x + character.width > target.x && // While shot is on the right side of enemy, points will be added
            character.y < target.y + target.height &&  // While shot is above enemy, points will be added
            character.x < target.x + target.width && // While shot is on the left side of enemy, points will be added
            character.y + character.height > target.y // While shot is underneath enemy, points will be added
            );

        if (gotShot) {
            let newScore = Number(score.textContent) + 10;
            score.textContent = newScore;
            enemies.alive = false;
            console.log(enemies.alive);
            return makeEnemies();
        } else {
            return false;
        }
    }


// ====================== Make Win\Lose Conditions here ========
const endGame = () => {
    const timeLeft = parseInt(time.textContent);

    if (timeLeft <= 0) {
        const canvasElem = document.getElementById('game');
        const gameEndElem = document.getElementById('game-end');

        canvasElem.style.display = 'none';
        gameEndElem.style.display = 'block';
    }
}

5

// ====================== Make Power-Ups Here ==================



// ====================== Make Game Loop Here ==================