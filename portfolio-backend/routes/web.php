<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes - VERSION DEBUG TEMPORAIRE
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('welcome');
});

// Route temporaire : crée un admin propre
Route::get('/setup-admin', function () {
    // Supprimer tous les anciens utilisateurs
    \App\Models\User::truncate();

    // Créer un nouvel admin
    $user = \App\Models\User::create([
        'nom' => 'Yahaya Admin',
        'email' => 'admin@portfolio.com',
        'password' => \Illuminate\Support\Facades\Hash::make('admin123'),
        'bio' => 'Assistant Suivi-Évaluation (MEAL/SERA)',
    ]);

    return response()->json([
        'message' => 'Admin créé et anciens supprimés',
        'user' => $user,
        'email' => 'admin@portfolio.com',
        'password' => 'admin123',
    ]);
});

// Route temporaire : vérifie les utilisateurs
Route::get('/check-admin', function () {
    $users = \App\Models\User::all(['id', 'nom', 'email']);
    return response()->json([
        'total_users' => $users->count(),
        'users' => $users,
    ]);
});

// Route temporaire : teste le login directement
Route::get('/test-login', function () {
    $user = \App\Models\User::where('email', 'admin@portfolio.com')->first();

    if (!$user) {
        return response()->json(['error' => 'Aucun utilisateur avec cet email']);
    }

    $passwordOk = \Illuminate\Support\Facades\Hash::check('admin123', $user->password);

    return response()->json([
        'user_exists' => true,
        'email' => $user->email,
        'password_admin123_ok' => $passwordOk,
        'password_hash' => substr($user->password, 0, 20) . '...',
    ]);
});