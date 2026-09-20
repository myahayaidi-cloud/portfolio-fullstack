
<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('welcome');
});

// Route de diagnostic (temporaire)
Route::get('/debug-api', function () {
    return response()->json([
        'laravel_version' => app()->version(),
        'php_version' => phpversion(),
        'api_file_exists' => file_exists(base_path('routes/api.php')),
        'api_file_size' => file_exists(base_path('routes/api.php')) ? filesize(base_path('routes/api.php')) : 0,
        'route_cache_exists' => file_exists(base_path('bootstrap/cache/routes-v7.php')),
        'route_cache_size' => file_exists(base_path('bootstrap/cache/routes-v7.php')) ? filesize(base_path('bootstrap/cache/routes-v7.php')) : 0,
        'api_routes' => collect(Route::getRoutes())
            ->filter(fn($r) => str_starts_with($r->uri(), 'api/'))
            ->map(fn($r) => $r->methods()[0] . ' ' . $r->uri())
            ->values()
            ->toArray(),
        'all_routes_count' => count(Route::getRoutes()),
    ]);
});
Route::get('/check-admin', function () {
    $users = \App\Models\User::all(['id', 'nom', 'email', 'created_at']);
    return response()->json([
        'total_users' => $users->count(),
        'users' => $users,
        'db_name' => \DB::connection()->getDatabaseName(),
        'db_host' => \DB::connection()->getConfig('host'),
    ]);
});