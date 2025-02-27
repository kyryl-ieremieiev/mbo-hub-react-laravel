<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index(Request $request)
    {
        $query = Team::query();

        if ($request->has('name')) {
            $query->where('name', 'like', '%' . $request->name . '%');
        }

        if ($request->has('role')) {
            $query->where('role', 'like', '%' . $request->role . '%');
        }

        $teams = $query->orderBy('name', 'asc')->paginate(10);

        return response()->json($teams);
    }
}