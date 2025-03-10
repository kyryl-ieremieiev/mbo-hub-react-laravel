<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{

    public function index(Request $request)
    {
        $query = Tag::query();

        if ($request->has('name')) {
            $query->where('name', 'like', '%' . $request->name . '%');
        }

        if ($request->has('color')) {
            $query->where('color', $request->color);
        }

        $tags = $query->orderBy('name')->paginate(10);

        return response()->json($tags);
    }

    public function show($id)
    {
        $tag = Tag::with(['skills', 'projects', 'events'])->findOrFail($id);
        return response()->json($tag);
    }
}
