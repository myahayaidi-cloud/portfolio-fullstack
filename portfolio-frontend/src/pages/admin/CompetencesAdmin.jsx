import { useEffect, useState } from 'react';
import api from '../../services/api';

function CompetencesAdmin() {
    const [competences, setCompetences] = useState([]);
    const [formData, setFormData] = useState({ nom: '', categorie: '', niveau: 1 });
    const [editing, setEditing] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchCompetences = async () => {
        try {
            const response = await api.get('/competences');
            setCompetences(response.data);
        } catch (error) {
            console.error('Erreur :', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCompetences();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (editing) {
                await api.put(`/competences/${editing}`, formData);
            } else {
                await api.post('/competences', formData);
            }
            setFormData({ nom: '', categorie: '', niveau: 1 });
            setEditing(null);
            fetchCompetences();
        } catch (error) {
            console.error('Erreur :', error);
        }
    };

    const handleEdit = (comp) => {
        setEditing(comp.id);
        setFormData({ nom: comp.nom, categorie: comp.categorie, niveau: comp.niveau });
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Supprimer cette compétence ?')) return;

        try {
            await api.delete(`/competences/${id}`);
            fetchCompetences();
        } catch (error) {
            console.error('Erreur :', error);
        }
    };

    return (
        <div className="container py-5">
            <h1 className="mb-4">Gestion des compétences</h1>

            <div className="row">
                {/* Formulaire */}
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5>{editing ? 'Modifier' : 'Ajouter'} une compétence</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Nom *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={formData.nom}
                                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Catégorie *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={formData.categorie}
                                        onChange={(e) => setFormData({ ...formData, categorie: e.target.value })}
                                        placeholder="ex: Front-end, Back-end"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Niveau (1-5) *</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        min="1"
                                        max="5"
                                        value={formData.niveau}
                                        onChange={(e) => setFormData({ ...formData, niveau: parseInt(e.target.value) })}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    {editing ? 'Mettre à jour' : 'Ajouter'}
                                </button>
                                {editing && (
                                    <button
                                        type="button"
                                        className="btn btn-secondary w-100 mt-2"
                                        onClick={() => {
                                            setEditing(null);
                                            setFormData({ nom: '', categorie: '', niveau: 1 });
                                        }}
                                    >
                                        Annuler
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

                {/* Liste */}
                <div className="col-md-8">
                    {loading ? (
                        <p>Chargement...</p>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Nom</th>
                                        <th>Catégorie</th>
                                        <th>Niveau</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {competences.map(comp => (
                                        <tr key={comp.id}>
                                            <td>{comp.nom}</td>
                                            <td>{comp.categorie}</td>
                                            <td>{comp.niveau}/5</td>
                                            <td>
                                                <button onClick={() => handleEdit(comp)} className="btn btn-sm btn-outline-warning me-2">
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                                <button onClick={() => handleDelete(comp.id)} className="btn btn-sm btn-outline-danger">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CompetencesAdmin;