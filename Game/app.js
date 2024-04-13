// ----- Galaga Type game -------
// ====================== Grab Html elements Here ==============
const movement = document.querySelector('#movement');
const timer = document.querySelector('#time');
const score = document.querySelector('#points');
const enemyCount= document.querySelector('#enemies');
const game = document.querySelector('#game');
const ctx = game.getContext('2d')



// ====================== Make Canvas Here =====================
game.setAttribute('height', getComputedStyle(game))


// ====================== Make Player Here =====================
let player;
class Character {
    constructor(x, y, image, width, height) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width;
        this.height = height;
    }
}


// ====================== Make Enemy Here ======================
let enemies;


// ====================== Make Controls Here ===================



// ====================== Make Timer Here ======================



// ====================== Make Helper Functions Here ===========



// ====================== Make Game Process Here ===============



// ====================== Make Collision Here ==================



// ====================== Make Win\Lose Conditions here ========



// ====================== Make Power-Ups Here ==================



// ====================== Make Game Loop Here ==================