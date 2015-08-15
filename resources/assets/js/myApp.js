
console.log('Greetings.');
// JEEP WILLIKERS - AN AWESOME LOOKING APPLICATION 
// WRITTEN FOR SPEED, INTELLIGENCE AND MASS APPEAL

var urlify = require('urlify').create();

var text = 'Some text string.  It also contains a URL.  https://www.amazon.com';

$('body').append(urlify(text));
