<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\lab06Controller;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('lab06/{name}', function ($name) {
    return "<h1>Welcome to {$name} homepage</h1>".'<h3>this first time ti run Laravel Framework.</h3>';
});

Route::get('welcome/{firstname?}/{lastname?}',[Controller::class,'welcome']);


Route::get('it/{firstname?}/{lastname?}',[lab06Controller::class,'welcome'] );