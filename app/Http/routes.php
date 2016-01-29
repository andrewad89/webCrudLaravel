<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('controlador','PruebaController@index');

Route::get('name/{name}','PruebaController@nombre');

Route::resource('webCrud','webCrudController');

Route::get('prueba', function () {
    return "hola desde routes.php";
});

Route::get('nombre/{nombre}', function ($nombre) {

    return "Mi nombre es :".$nombre;
});

Route::get('/', function () {
    return view('welcome');
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
