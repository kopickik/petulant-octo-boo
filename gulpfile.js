var elixir      = require('laravel-elixir');
var jshint      = require('laravel-elixir-jshint');
                  require('jshint-stylish');

elixir.config.sourcemaps = false;

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
    )
    .copy(
        'vendor/bower_components/angular/angular.min.js',
        'public/js/angular.js'
    );
    mix.stylesIn('public/css');
    mix
        .jshint([
            'resources/assets/js/*.js'
            ])
        .browserify('main.js')
        ;
});
