// ----- Galaga Type game -------
// ====================== Grab Html elements Here ==============
const movement = document.querySelector('#movement');
const timer = document.querySelector('#time');
const score = document.querySelector('#points');
const enemyCount= document.querySelector('#enemies');
const game = document.querySelector('#game');
const ctx = game.getContext('2d');
const testImg = document.getElementById('testImg');
const testImg2 = document.getElementById('testImg2');
const testShot = document.getElementById('test-shot');



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
let enemiesArr1 = [];
let enemiesArr2 = [];
let enemiesArr3 = [];
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


// ====================== Make Controls Here ===================
function controls(x) {
    
    console.log('movement :', x.key);

    if (x.key === 'ArrowLeft' || x.key === 'a') {
        player.x -= 5;
    } else if (x.key === 'ArrowRight' || x.key === 'd') {
        player.x += 5;
    } else if (x.key === 'q') {
        shoot = new shot(player.x + 17, player.y - 15, testShot, 15, 15);
        let interval = setInterval(() => {
            shoot.render();
            shoot.y -= 1;
        }, 1)

        setTimeout(() => {
            clearInterval(interval)
        }, 1000);
        
        // while (shoot.y >= game.height) {
        //     setInterval(function() {
        //         shoot.y += 10;
        //     }, 50);
        // }
    }
}


// ====================== Make Timer Here ======================



// ====================== Make Helper Functions Here ===========
function makeEnemies() {
    let startingLocX = game.width + 40;
    let startingLocY = game.width + 40;
    for (let i = 0; i < 10; i++) {
        
    }
    /*setTimeout(function() {
        let startingLocX = game.width + 40;
        let startingLocY = game.width + 40;

    }, 500);*/
}

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

// ====================== Make Game Process Here ===============
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    player.render();
    enemies.render();
   // shoot.render();
    setInterval
    while (timer < 0) {
        if (enemyCountNum < 0) {

        }
    }
}


// ====================== Make Collision Here ==================



// ====================== Make Win\Lose Conditions here ========



// ====================== Make Power-Ups Here ==================



// ====================== Make Game Loop Here ==================