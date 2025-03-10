<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;

class EventTagController extends Controller
{

    public function index(Request $request)
    {
        $query = Tag::whereHas('events');

        if ($request->has('name')) {
            $query->where('name', 'like', '%' . $request->name . '%');
        }

        if ($request->has('color')) {
            $query->where('color', $request->color);
        }

        $tags = $query->orderBy('name')->get();

        return response()->json($tags);
    }
}
