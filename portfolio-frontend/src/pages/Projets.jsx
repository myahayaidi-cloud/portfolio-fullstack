import { useEffect, useState } from 'react';
import api from '../services/api';
import ProjetCard from '../components/ProjetCard';
import Loader from '../components/Loader';

function Projets() {
    const [projets, setProjets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({});

    const fetchProjets = async (page = 1) => {
        setLoading(true);
        try {
            const response = await api.get(`/projets?page=${page}`);
            setProjets(response.data.data);
            setPagination(response.data);
        } catch (error) {
            console.error('Erreur :', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjets();
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Mes projets</h1>

            {loading ? (
                <Loader />
            ) : projets.length > 0 ? (
                <>
                    <div className="row">
                        {projets.map(projet => (
                            <div key={projet.id} className="col-md-4 mb-4">
                                <ProjetCard projet={projet} />
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {pagination.last_page > 1 && (
                        <nav className="d-flex justify-content-center mt-4">
                            <ul className="pagination">
                                {Array.from({ length: pagination.last_page }, (_, i) => i + 1).map(page => (
                                    <li key={page} className={`page-item ${page === pagination.current_page ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => fetchProjets(page)}>
                                            {page}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </>
            ) : (
                <p className="text-center text-muted">Aucun projet pour le moment.</p>
            )}
        </div>
    );
}

export default Projets;