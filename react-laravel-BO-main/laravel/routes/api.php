<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\EventController;
use App\Http\Controllers\API\SkillController;
use App\Http\Controllers\API\TeamController;
use App\Http\Controllers\API\DeveloperTeamController;
use App\Http\Controllers\API\TagController;
use App\Http\Controllers\API\EventTagController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Haalt alle projecten op
Route::get('/projects', [ProjectController::class, 'index']);
// Haalt een specifiek project op
Route::get('/projects/{slug}', [ProjectController::class, 'show']);
// Haalt alle events op
Route::get('/events', [EventController::class, 'index']);
// haalt alle skills op
Route::get('/skills', [SkillController::class, 'index']);
// haalt alle teams op
Route::get('/teams', [TeamController::class, 'index']);
// haalt alle developer-teams op
Route::get('/developer-teams', [DeveloperTeamController::class, 'index']);
// haalt alle tags op
Route::get('/tags', [TagController::class, 'index']);
// haalt een specifieke tag op
Route::get('/tags/{id}', [TagController::class, 'show']);
// haalt alle event-tags op
Route::get('/event-types', [EventTagController::class, 'index']);