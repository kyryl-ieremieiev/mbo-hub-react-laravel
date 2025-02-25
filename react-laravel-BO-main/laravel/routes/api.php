<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\EventController;
use App\Http\Controllers\API\SkillController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/events', [EventController::class, 'index']);
Route::get('/skills', [SkillController::class, 'index']);