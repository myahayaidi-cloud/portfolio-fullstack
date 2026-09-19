import { useEffect, useState } from 'react';
import api from '../../services/api';

function MessagesAdmin() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMessages = async () => {
        try {
            const response = await api.get('/messages');
            setMessages(response.data);
        } catch (error) {
            console.error('Erreur :', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Supprimer ce message ?')) return;

        try {
            await api.delete(`/messages/${id}`);
            fetchMessages();
        } catch (error) {
            console.error('Erreur :', error);
        }
    };

    return (
        <div className="container py-5">
            <h1 className="mb-4">Messages reçus</h1>

            {loading ? (
                <p>Chargement...</p>
            ) : messages.length === 0 ? (
                <p className="text-muted">Aucun message reçu.</p>
            ) : (
                <div className="row">
                    {messages.map(msg => (
                        <div key={msg.id} className="col-md-6 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{msg.sujet || 'Sans sujet'}</h5>
                                    <p className="text-muted small">
                                        De : {msg.nom} ({msg.email})<br />
                                        Le : {new Date(msg.created_at).toLocaleDateString('fr-FR')}
                                    </p>
                                    <p className="card-text">{msg.contenu}</p>
                                </div>
                                <div className="card-footer bg-white">
                                    <button onClick={() => handleDelete(msg.id)} className="btn btn-sm btn-outline-danger">
                                        <i className="bi bi-trash"></i> Supprimer
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MessagesAdmin;