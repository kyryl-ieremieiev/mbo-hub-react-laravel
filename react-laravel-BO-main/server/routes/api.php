<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

// Projects
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{id}', [ProjectController::class, 'show']);
Route::post('/projects/create', [ProjectController::class, 'store']);
Route::put('/projects/update/{id}', [ProjectController::class, 'update']);
Route::delete('/projects/delete/{id}', [ProjectController::class, 'destroy']);
