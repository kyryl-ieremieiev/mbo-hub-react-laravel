<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $query = Project::query();

        if ($request->has('title')) {
            $query->where('title', 'like', '%' . $request->title . '%');
        }

        if ($request->has('published_at')) {
            $query->whereDate('published_at', $request->published_at);
        }

        $projects = $query->orderBy('published_at', 'desc')->paginate(10);

        return response()->json($projects);
    }
}
