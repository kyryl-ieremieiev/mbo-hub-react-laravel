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
        $limit = 10;

        if ($request->has('slug')) {
            $project = Project::where('slug', $request->slug)->first();
            return response()->json($project);
        }

        if ($request->has('title')) {
            $query->where('title', 'like', '%' . $request->title . '%');
        }

        if ($request->has('published_at')) {
            $query->whereDate('published_at', $request->published_at);
        }

        if ($request->has('home')) {
            $query->where('show_on_homepage', 1);
        }

        if ($request->has('limit')) {
            $limit = $request->limit;
        }

        $projects = $query->orderBy('published_at', 'desc')->paginate($limit);

        return response()->json($projects);
    }


    public function show($slug)
    {
        $project = Project::where('slug', $slug)->firstOrFail();
        return response()->json($project);
    }
}
