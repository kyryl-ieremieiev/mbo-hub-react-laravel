<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index(Request $request)
    {
        $query = Skill::with('tags');

        if ($request->has('title')) {
            $query->where('title', 'like', '%' . $request->title . '%');
        }

        if ($request->has('description')) {
            $query->where('description', 'like', '%' . $request->description . '%');
        }

        $skills = $query->orderBy('title', 'asc')->paginate(10);

        return response()->json($skills);
    }

    public function show($id)
    {
        $skill = Skill::with('tags')->findOrFail($id);
        return response()->json($skill);
    }
}
