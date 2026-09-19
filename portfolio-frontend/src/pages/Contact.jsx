import { useState } from 'react';
import api from '../services/api';

function Contact() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        sujet: '',
        contenu: '',
    });
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess('');
        setError('');

        try {
            await api.post('/messages', formData);
            setSuccess('Votre message a bien été envoyé !');
            setFormData({ nom: '', email: '', sujet: '', contenu: '' });
        } catch (err) {
            setError('Une erreur est survenue. Vérifiez vos informations.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Me contacter</h1>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    {success && <div className="alert alert-success">{success}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}

                    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                        <div className="mb-3">
                            <label className="form-label">Nom *</label>
                            <input
                                type="text"
                                name="nom"
                                className="form-control"
                                value={formData.nom}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email *</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Sujet</label>
                            <input
                                type="text"
                                name="sujet"
                                className="form-control"
                                value={formData.sujet}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message *</label>
                            <textarea
                                name="contenu"
                                className="form-control"
                                rows="5"
                                value={formData.contenu}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Envoi...' : 'Envoyer le message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;