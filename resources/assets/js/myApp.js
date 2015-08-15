
console.log('Greetings.');
// JEEP WILLIKERS - AN AWESOME LOOKING APPLICATION 
// WRITTEN FOR SPEED, INTELLIGENCE AND MASS APPEAL

var urlify = require('urlify').create();

var text = 'Some text string.  It also contains a URL.  https://www.amazon.com';

$('body').append(urlify(text));

// PHASER.IO - HTML5 JS GAME LIBRARY
// FOLLOWING TUTORIAL - 
// http://codeperfectionist.com/articles/phaser-js-tutorial-building-a-polished-space-shooter-game-part-1/


var Phaser = require('phaser');

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-demo', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

var player;
var starfield;
var cursors;
var bank;
var ACCELERATION = 600;
var DRAG = 400;
var MAXSPEED = 400;


function preload() {
    game.load.image('starfield', 'images/starfield.png');
    game.load.image('ship', 'images/player.png');
}

function create() {
    starfield = game.add.tileSprite(0, 0, 800, 600, 'starfield');
    // The hero!
    player = game.add.sprite(400, 500, 'ship');
    player.anchor.setTo(0.5, 0.5);
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.maxVelocity.setTo(MAXSPEED, MAXSPEED);
    player.body.drag.setTo(DRAG, DRAG);
    // Add controls to play the game with
    cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    // Scroll the bg
    starfield.tilePosition.y += 2;

    // Reset the player, then check for movement keys
    player.body.acceleration.x = 0;

    if (cursors.left.isDown) {
        player.body.acceleration.x = -ACCELERATION;
    }
    else if (cursors.right.isDown) {
        player.body.acceleration.x = ACCELERATION;
    }
    // Stop at screen edges
    if (player.x > game.width - 50) {
        player.x = game.width - 50;
        player.body.acceleration.x = 0;
    }
    if (player.x < 50) {
        player.x = 50;
        player.body.acceleration.x = 0;
    }

    bank = player.body.velocity.x / MAXSPEED;
    player.scale.x = 1 - Math.abs(bank) / 2;
    player.angle = bank * 10;

}

function render() {

}
