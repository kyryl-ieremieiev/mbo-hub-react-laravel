<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * @param $base64
     * @return string
     */
    private function processImage($base64) : string
    {
        $image = file_get_contents($base64);

        // Generate a unique filename
        $fileName = uniqid('project_', true) . '.webp';

        // Define the storage path (public accessible)
        $filePath = storage_path('app/public/images/' . $fileName);

        // Save the image to the path
        file_put_contents($filePath, $image);

        // Return the relative file path for storage in the database
        return 'images/' . $fileName;
    }

    public function index() : \Illuminate\Http\JsonResponse
    {
        $projects = Project::all();

        return response()->json($projects, 200);
    }

    public function store(Request $request) : \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'image'       => 'required|string',
            'tag'         => 'required|string|max:255',
        ]);

        $request['image_path'] = $this->processImage($request->image);
        $request['image']      = null;

        $project = Project::create($request->all());

        return response()->json($project, 201);
    }

    public function show($id) : \Illuminate\Http\JsonResponse
    {
        $project = Project::findOrFail($id);

        return response()->json($project, 200);
    }

    public function update(Request $request, $id) : \Illuminate\Http\JsonResponse
    {
        $project = Project::findOrFail($id);
        $project->update($request->all());

        return response()->json($project, 200);
    }

    public function destroy($id) : \Illuminate\Http\JsonResponse
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return response()->json(null, 204);
    }
}
