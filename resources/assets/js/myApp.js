
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
var shipTrail;// particles :)
var bullets;
var bulletTimer = 0;// limit firing rate
var fireButton;

var ACCELERATION = 600;
var DRAG = 400;
var MAXSPEED = 400;


function preload() {
    game.load.image('starfield', 'images/starfield.png');
    game.load.image('ship', 'images/player.png');
    game.load.image('bullet', 'images/bullet.png');
    game.load.image('enemy-green', 'images/enemy-green.png');
    game.load.image('enemy-blue', 'images/enemy-blue.png');
    game.load.image('blueEnemyBullet', 'images/enemy-blue-bullet.png');
    game.load.spritesheet('explosion', 'images/explode.png');
    game.load.bitmapFont('spacefont', 'images/spacefont/spacefont.png', 'images/spacefont/spacefont.xml');
    game.load.image('boss', 'images/boss.png');
    game.load.image('deathRay', 'images/death-ray.png');
}

function create() {
    starfield = game.add.tileSprite(0, 0, 800, 600, 'starfield');

    // Our bullet group
    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);
    // The hero!
    player = game.add.sprite(400, 500, 'ship');
    player.anchor.setTo(0.5, 0.5);
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.maxVelocity.setTo(MAXSPEED, MAXSPEED);
    player.body.drag.setTo(DRAG, DRAG);
    // Add controls to play the game with
    cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    // Add an emitter for the ship's particles trail
    shipTrail = game.add.emitter(player.x, player.y + 10, 400);
    shipTrail.width = 10;
    shipTrail.makeParticles('bullet');
    shipTrail.setXSpeed(30, -30);
    shipTrail.setYSpeed(200, 180);
    shipTrail.setRotation(50, -50);
    shipTrail.setAlpha(1, 0.01, 800);
    shipTrail.setScale(0.05, 0.4, 0.05, 0.4, 2000, Phaser.Easing.Quintic.Out);
    shipTrail.start(false, 5000, 10);

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

    // Fire bullet
    if (fireButton.isDown || game.input.activePointer.isDown) {
        fireBullet();
    }
    // Move ship towards mouse pointer
    if (game.input.x < game.width - 20 &&
        game.input.x > 20 &&
        game.input.y > 20 &&
        game.input.y < game.height - 20) {
        var minDist = 200;
        var dist = game.input.x - player.x;
        player.body.velocity.x = MAXSPEED * game.math.clamp(dist / minDist, -1, 1);
    }



    // Squish and rotate ship for illusion of "banking"
    bank = player.body.velocity.x / MAXSPEED;
    player.scale.x = 1 - Math.abs(bank) / 2;
    player.angle = bank * 30;

    // Keep the shipTrail lined up with the ship
    shipTrail.x = player.x;

}

function fireBullet() {

    // to avoid them being allowed to fire too fast we set a time
    if (game.time.now > bulletTimer)
    {
        var BULLET_SPEED = 400;
        var BULLET_SPACING = 250;
        // Grab the first bullet we can from the pool
        var bullet = bullets.getFirstExists(false);
        if (bullet) {
            // And fire it
            var bulletOffset = 20 * Math.sin(game.math.degToRad(player.angle));
            bullet.reset(player.x + bulletOffset, player.y);
            bullet.angle = player.angle;
            game.physics.arcade.velocityFromAngle(bullet.angle - 90, BULLET_SPEED, bullet.body.velocity);
            bullet.body.velocity.x += player.body.velocity.x;

            bulletTimer = game.time.now + BULLET_SPACING;
        }
    }
}

function render() {

}
