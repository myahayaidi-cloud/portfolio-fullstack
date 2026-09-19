import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import ProjetCard from '../components/ProjetCard';
import Loader from '../components/Loader';

function Home() {
    const [projets, setProjets] = useState([]);
    const [competences, setCompetences] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [projetsRes, competencesRes] = await Promise.all([
                    api.get('/projets'),
                    api.get('/competences'),
                ]);
                const projetsData = projetsRes.data.data || projetsRes.data;
                setProjets(projetsData.slice(0, 3));
                setCompetences(competencesRes.data.slice(0, 4));
            } catch (error) {
                console.error('Erreur :', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center mb-3 mb-md-0">
                            <img
                                src="/images/profile.jpg"
                                alt="Yahaya Idi Mahaman Laouali"
                                className="rounded-circle shadow"
                                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-8">
                            <h1 className="display-5">Yahaya Idi Mahaman Laouali</h1>
                            <p className="lead text-primary">
                                Assistant Suivi-Évaluation (MEAL/SERA) — WASH & Hydraulique
                            </p>
                            <p className="text-muted">
                                Diplômé en hydrogéologie (Master, prospection et gestion des ressources en eau souterraine),
                                avec une expérience de terrain en suivi-évaluation acquise sur deux projets d'infrastructure
                                hydraulique au Niger. Compétent en collecte et contrôle qualité de données
                                (KoboToolbox/KoboCollect, capteurs automatiques), suivi d'indicateurs techniques et
                                rédaction de rapports.
                            </p>
                            <div className="mt-3">
                                <a
                                    href="/cv/Yahaya_Idi_Mahaman_Laouali_CV.pdf"
                                    download
                                    className="btn btn-primary me-2"
                                >
                                    <i className="bi bi-download"></i> Télécharger mon CV
                                </a>
                                <Link to="/contact" className="btn btn-outline-primary">
                                    Me contacter
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projets Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Mes projets</h2>
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
                            <div className="text-center mt-3">
                                <Link to="/projets" className="btn btn-outline-primary">
                                    Voir tous les projets
                                </Link>
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-muted">Aucun projet pour le moment.</p>
                    )}
                </div>
            </section>

            {/* Compétences Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Mes compétences</h2>
                    {!loading && competences.length > 0 ? (
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                {competences.map(comp => (
                                    <div key={comp.id} className="mb-3">
                                        <div className="d-flex justify-content-between">
                                            <span className="fw-semibold">{comp.nom}</span>
                                            <span className="text-muted">{comp.niveau}/5</span>
                                        </div>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div
                                                className="progress-bar bg-primary"
                                                style={{ width: `${(comp.niveau / 5) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-muted">Aucune compétence pour le moment.</p>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Home;