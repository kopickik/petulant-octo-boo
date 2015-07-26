var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
    mix.copy(
        'vendor/bower_components/foundation/css/foundation.min.css',
        'public/css/foundation.css')
    .copy(
        'vendor/bower_components/jquery/dist/jquery.min.js',
        'public/js/jquery.js'
    )
    .copy(
        'vendor/bower_components/foundation/js/foundation.min.js',
        'public/js/foundation.js'
    );
    mix.stylesIn('public/css');
    mix.browserify('main.js');
});
