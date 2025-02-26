<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index(Request $request)
    {
        $query = Event::query();

        if ($request->has('title')) {
            $query->where('title', 'like', '%' . $request->title . '%');
        }

        if ($request->has('date')) {
            $query->whereDate('date', $request->date);
        }

        if ($request->has('location')) {
            $query->where('location', 'like', '%' . $request->location . '%');
        }

        $events = $query->orderBy('date', 'asc')->paginate(10);

        return response()->json($events);
    }
}
