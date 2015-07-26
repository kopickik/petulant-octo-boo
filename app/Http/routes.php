<?php

/*
| Routes File
*/


/*
| Homepage
*/
Route::get('/', function () {
    return view('welcome');
});

/*
| Auth
*/
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');



Route::get('about', function() {
    return view('about');
});

Route::get('user/{id}', 'UsersController@showProfile');

/* ************ ************ ************ ************ ************ ************ ************ ************
** Sub-domain routing example
** 
** This property means Route groups may be used to route wildcard sub-domains, e.g. *.myfoosite.io
** 
** Sub-domains may be assigned route parameters just like route URIs, allowing you to capture 
**  a portion of the sub-domain for usage in your route or controller. The sub-domain 
**  may be specified using the domain key on the group attribute array:
** 
** Route::group(['domain' => '{account}.myapp.com'], function () {
**     Route::get('user/{id}', function ($account, $id) {
**         //
**     });
** });
** 
** 
/*/

Route::get('pinfo/1', function() {
    return 'routes file is nice.';
});

