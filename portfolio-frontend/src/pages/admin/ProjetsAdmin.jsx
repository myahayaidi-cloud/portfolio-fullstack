import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

function ProjetsAdmin() {
    const [projets, setProjets] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProjets = async () => {
        try {
            const response = await api.get('/projets');
            setProjets(response.data.data || response.data);
        } catch (error) {
            console.error('Erreur :', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjets();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Supprimer ce projet ?')) return;

        try {
            await api.delete(`/projets/${id}`);
            fetchProjets();
        } catch (error) {
            console.error('Erreur :', error);
        }
    };

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Gestion des projets</h1>
                <Link to="/admin/projets/create" className="btn btn-success">
                    <i className="bi bi-plus-lg"></i> Ajouter un projet
                </Link>
            </div>

            {loading ? (
                <p>Chargement...</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Titre</th>
                                <th>Technologies</th>
                                <th>Date début</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projets.map(projet => (
                                <tr key={projet.id}>
                                    <td>{projet.id}</td>
                                    <td>{projet.titre}</td>
                                    <td>{projet.technologies}</td>
                                    <td>{new Date(projet.date_debut).toLocaleDateString('fr-FR')}</td>
                                    <td>
                                        <Link to={`/admin/projets/${projet.id}/edit`} className="btn btn-sm btn-outline-warning me-2">
                                            <i className="bi bi-pencil"></i> Modifier
                                        </Link>
                                        <button onClick={() => handleDelete(projet.id)} className="btn btn-sm btn-outline-danger">
                                            <i className="bi bi-trash"></i> Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ProjetsAdmin;