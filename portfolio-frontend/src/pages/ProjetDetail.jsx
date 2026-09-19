import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import Loader from '../components/Loader';

function ProjetDetail() {
    const { id } = useParams();
    const [projet, setProjet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjet = async () => {
            try {
                const response = await api.get(`/projets/${id}`);
                setProjet(response.data);
            } catch (error) {
                console.error('Erreur :', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjet();
    }, [id]);

    if (loading) return <Loader />;
    if (!projet) return <div className="container py-5"><p>Projet introuvable.</p></div>;

    return (
        <div className="container py-5">
            <Link to="/projets" className="btn btn-outline-secondary mb-4">⬅ Retour aux projets</Link>

            <div className="card shadow-sm">
                <img
                    src={projet.image || 'https://via.placeholder.com/800x400?text=Projet'}
                    className="card-img-top"
                    alt={projet.titre}
                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h1 className="card-title">{projet.titre}</h1>
                    <p className="text-muted">
                        <i className="bi bi-calendar"></i> {new Date(projet.date_debut).toLocaleDateString('fr-FR')}
                        {projet.date_fin && ` - ${new Date(projet.date_fin).toLocaleDateString('fr-FR')}`}
                    </p>
                    <p className="text-primary">
                        <i className="bi bi-code-slash"></i> {projet.technologies}
                    </p>
                    <hr />
                    <p className="card-text">{projet.description}</p>

                    <div className="mt-4">
                        {projet.lien_demo && (
                            <a href={projet.lien_demo} target="_blank" rel="noreferrer" className="btn btn-primary me-2">
                                <i className="bi bi-link-45deg"></i> Voir la démo
                            </a>
                        )}
                        {projet.lien_github && (
                            <a href={projet.lien_github} target="_blank" rel="noreferrer" className="btn btn-outline-dark">
                                <i className="bi bi-github"></i> Code source
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjetDetail;