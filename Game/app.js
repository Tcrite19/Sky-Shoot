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



// ====================== Make Canvas Here =====================
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);

window.addEventListener('DOMContentLoaded', function() {
    enemies = new enemy(50, 50, testImg2, 40, 40);
    player = new Character(200, 225, testImg, 50, 50);
    //shoot = new shot(player.x, player.y, testShot, 25, 50);
    const runGame = setInterval(gameLoop, 100);
});
document.addEventListener('keydown', controls);

// ====================== Make Player Here =====================
let player;
class Character {
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
    if (enemies.x <= game.width - enemies.width) {
        enemies.x - 5 <= game.width - enemies.width ? (setInterval(() => {
            enemies.x += 1;
            enemies.render();
            clearInterval();
        }, 1000)) : null;
    } else if (enemies.x >= 0) {
        enemies.x + 5 >= 0 ? (setInterval(() => {
            enemies.x -= 1;
            enemies.render();
        }, 1)) : null;
        setTimeout(() => {
            clearInterval()
        }, 100)
    }
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
}


// ====================== Make Helper Functions Here ===========
function makeEnemies() {
    

    /*setTimeout(function() {
        let startingLocX = game.width + 40;
        let startingLocY = game.width + 40;

    }, 500);*/
}

let shooting = () => {
    lsrSnd();
        shoot = new shot(player.x + 17, player.y - 15, testShot, 15, 15);
        let interval = setInterval(() => {
            shoot.render();
            shoot.y -= 1;
        }, 1)

        setTimeout(() => {
            clearInterval(interval)
        }, 1000);
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
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    player.render();
    enemies.render();
    

    
   // shoot.render();
    //setInterval
    enemyMovement();
    timeLeft();
    collision();
}


// ====================== Make Collision Here ==================
    const collision = () => {
        
        let gotShot = (
            shoot.x + shoot.width > enemies.x && // While shot is on the right side of enemy, points will be added
            shoot.y < enemies.y + enemies.height &&  // While shot is above enemy, points will be added
            shoot.x < enemies.x + enemies.width && // While shot is on the left side of enemy, points will be added
            shoot.y + shoot.height > enemies.y // While shot is underneath enemy, points will be added
            );

        if (gotShot) {
            let newScore = Number(score.textContent) + 10;
            score.textContent = newScore;
        }
    }


// ====================== Make Win\Lose Conditions here ========



// ====================== Make Power-Ups Here ==================



// ====================== Make Game Loop Here ==================