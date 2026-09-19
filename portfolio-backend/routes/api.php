<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjetController;
use App\Http\Controllers\Api\CompetenceController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\AuthController;

// Routes publiques
Route::get('/projets', [ProjetController::class, 'index']);
Route::get('/projets/{id}', [ProjetController::class, 'show']);
Route::get('/competences', [CompetenceController::class, 'index']);
Route::get('/profile', [ProfileController::class, 'show']);
Route::post('/messages', [MessageController::class, 'store']);
Route::post('/login', [AuthController::class, 'login']);

// Routes protégées
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::post('/projets', [ProjetController::class, 'store']);
    Route::put('/projets/{id}', [ProjetController::class, 'update']);
    Route::delete('/projets/{id}', [ProjetController::class, 'destroy']);

    Route::post('/competences', [CompetenceController::class, 'store']);
    Route::put('/competences/{id}', [CompetenceController::class, 'update']);
    Route::delete('/competences/{id}', [CompetenceController::class, 'destroy']);

    Route::put('/profile', [ProfileController::class, 'update']);

    Route::get('/messages', [MessageController::class, 'index']);
    Route::delete('/messages/{id}', [MessageController::class, 'destroy']);
});
