<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Skill;

class SkillController extends Controller
{
    public function index()
    {
        $skills = Skill::all();
        return response()->json($skills);
    }
}
