<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/admin');
});

// Authentication routes
require __DIR__.'/auth.php';
