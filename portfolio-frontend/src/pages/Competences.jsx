import { useEffect, useState } from 'react';
import api from '../services/api';
import CompetenceBar from '../components/CompetenceBar';
import Loader from '../components/Loader';

function Competences() {
    const [competences, setCompetences] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
        fetchCompetences();
    }, []);

    // Grouper par catégorie
    const categories = competences.reduce((acc, comp) => {
        if (!acc[comp.categorie]) acc[comp.categorie] = [];
        acc[comp.categorie].push(comp);
        return acc;
    }, {});

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Mes compétences</h1>

            {loading ? (
                <Loader />
            ) : Object.keys(categories).length > 0 ? (
                Object.entries(categories).map(([categorie, comps]) => (
                    <div key={categorie} className="mb-5">
                        <h3 className="text-primary mb-3">{categorie}</h3>
                        <div className="row">
                            {comps.map(comp => (
                                <div key={comp.id} className="col-md-6">
                                    <CompetenceBar competence={comp} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-muted">Aucune compétence enregistrée.</p>
            )}
        </div>
    );
}

export default Competences;