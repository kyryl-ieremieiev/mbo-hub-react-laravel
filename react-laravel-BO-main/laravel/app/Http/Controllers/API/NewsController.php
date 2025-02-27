<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\News;

class NewsController extends Controller

{
    public function index()
    {
        $news = News::all();
        return response()->json($news);
    }
}
