import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

function ProjetForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);

    const [formData, setFormData] = useState({
        titre: '',
        description: '',
        technologies: '',
        image: '',
        lien_demo: '',
        lien_github: '',
        date_debut: '',
        date_fin: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isEditing) {
            const fetchProjet = async () => {
                try {
                    const response = await api.get(`/projets/${id}`);
                    const p = response.data;
                    setFormData({
                        titre: p.titre || '',
                        description: p.description || '',
                        technologies: p.technologies || '',
                        image: p.image || '',
                        lien_demo: p.lien_demo || '',
                        lien_github: p.lien_github || '',
                        date_debut: p.date_debut ? p.date_debut.split('T')[0] : '',
                        date_fin: p.date_fin ? p.date_fin.split('T')[0] : '',
                    });
                } catch (err) {
                    console.error(err);
                }
            };
            fetchProjet();
        }
    }, [id, isEditing]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (isEditing) {
                await api.put(`/projets/${id}`, formData);
            } else {
                await api.post('/projets', formData);
            }
            navigate('/admin/projets');
        } catch (err) {
            setError('Erreur lors de l\'enregistrement. Vérifiez les champs.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-5">
            <h1 className="mb-4">{isEditing ? 'Modifier' : 'Ajouter'} un projet</h1>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    {error && <div className="alert alert-danger">{error}</div>}

                    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                        <div className="mb-3">
                            <label className="form-label">Titre *</label>
                            <input
                                type="text"
                                name="titre"
                                className="form-control"
                                value={formData.titre}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Description *</label>
                            <textarea
                                name="description"
                                className="form-control"
                                rows="4"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Technologies *</label>
                            <input
                                type="text"
                                name="technologies"
                                className="form-control"
                                placeholder="ex: React, Laravel, MySQL"
                                value={formData.technologies}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Image (URL)</label>
                            <input
                                type="text"
                                name="image"
                                className="form-control"
                                value={formData.image}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Lien démo</label>
                                <input
                                    type="text"
                                    name="lien_demo"
                                    className="form-control"
                                    value={formData.lien_demo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Lien GitHub</label>
                                <input
                                    type="text"
                                    name="lien_github"
                                    className="form-control"
                                    value={formData.lien_github}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Date de début *</label>
                                <input
                                    type="date"
                                    name="date_debut"
                                    className="form-control"
                                    value={formData.date_debut}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Date de fin</label>
                                <input
                                    type="date"
                                    name="date_fin"
                                    className="form-control"
                                    value={formData.date_fin}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="d-flex gap-2">
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? 'Enregistrement...' : (isEditing ? 'Mettre à jour' : 'Créer le projet')}
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={() => navigate('/admin/projets')}>
                                Annuler
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProjetForm;