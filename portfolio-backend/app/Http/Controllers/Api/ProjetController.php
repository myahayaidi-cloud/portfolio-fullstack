<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Projet;
use Illuminate\Http\Request;

class ProjetController extends Controller
{
    public function index()
    {
        $projets = Projet::orderBy('date_debut', 'desc')->paginate(6);
        return response()->json($projets);
    }

    public function show($id)
    {
        $projet = Projet::findOrFail($id);
        return response()->json($projet);
    }

    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required|string',
            'technologies' => 'required|string',
            'date_debut' => 'required|date',
        ]);

        $projet = Projet::create($request->all());
        return response()->json($projet, 201);
    }

    public function update(Request $request, $id)
    {
        $projet = Projet::findOrFail($id);

        $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required|string',
            'technologies' => 'required|string',
            'date_debut' => 'required|date',
        ]);

        $projet->update($request->all());
        return response()->json($projet);
    }

    public function destroy($id)
    {
        $projet = Projet::findOrFail($id);
        $projet->delete();
        return response()->json(null, 204);
    }
}