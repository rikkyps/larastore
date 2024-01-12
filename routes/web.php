<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//AUTH
Route::get('/login', [App\Http\Controllers\Auth\RegisterController::class, 'index'])->name('register')->middleware('guest');
Route::get('/register', [App\Http\Controllers\Auth\RegisterController::class, 'index'])->name('register')->middleware('guest');
Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'store'])->name('register.store')->middleware('guest');
