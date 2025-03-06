<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\EventController;
use App\Http\Controllers\API\SkillController;
use App\Http\Controllers\API\TeamController;
use App\Http\Controllers\API\NewsController;
use App\Http\Controllers\API\DeveloperTeamController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');





Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{slug}', [ProjectController::class, 'show']);
Route::get('/events', [EventController::class, 'index']);
Route::get('/skills', [SkillController::class, 'index']);
Route::get('/teams', [TeamController::class, 'index']);
Route::get('/developer-teams', [DeveloperTeamController::class, 'index']);
Route::get('/news', [NewsController::class, 'index']);