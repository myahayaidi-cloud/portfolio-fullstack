<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Competence;
use Illuminate\Http\Request;

class CompetenceController extends Controller
{
    public function index()
    {
        $competences = Competence::all();
        return response()->json($competences);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'categorie' => 'required|string',
            'niveau' => 'required|integer|min:1|max:5',
        ]);

        $competence = Competence::create($request->all());
        return response()->json($competence, 201);
    }

    public function update(Request $request, $id)
    {
        $competence = Competence::findOrFail($id);

        $request->validate([
            'nom' => 'required|string|max:255',
            'categorie' => 'required|string',
            'niveau' => 'required|integer|min:1|max:5',
        ]);

        $competence->update($request->all());
        return response()->json($competence);
    }

    public function destroy($id)
    {
        $competence = Competence::findOrFail($id);
        $competence->delete();
        return response()->json(null, 204);
    }
}