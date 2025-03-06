<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\DeveloperTeam;
use Illuminate\Http\Request;

class DeveloperTeamController extends Controller
{
    public function index(Request $request)
    {
        $query = DeveloperTeam::query();

        if ($request->has('name')) {
            $query->where('name', 'like', '%' . $request->name . '%');
        }

        if ($request->has('role')) {
            $query->where('role', 'like', '%' . $request->role . '%');
        }

        $developerTeams = $query->orderBy('name', 'asc')->get();

        return response()->json($developerTeams);
    }
}
