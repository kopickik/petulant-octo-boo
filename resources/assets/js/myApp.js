var Log = require('./Log');
// JEEP WILLIKERS - AN AWESOME LOOKING APPLICATION 
// WRITTEN FOR SPEED, INTELLIGENCE AND MASS APPEAL

var urlify = require('urlify').create();

Log('Eat more chikn!');

var text = 'Some text string.  It also contains a URL.  https://www.amazon.com';

$('body').append(urlify(text));
