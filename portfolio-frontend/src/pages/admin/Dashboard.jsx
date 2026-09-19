import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

function Dashboard() {
    const [stats, setStats] = useState({ projets: 0, competences: 0, messages: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [projets, competences, messages] = await Promise.all([
                    api.get('/projets'),
                    api.get('/competences'),
                    api.get('/messages'),
                ]);
                setStats({
                    projets: projets.data.total || projets.data.data?.length || 0,
                    competences: competences.data.length,
                    messages: messages.data.length,
                });
            } catch (error) {
                console.error(error);
            }
        };
        fetchStats();
    }, []);

    return (
        <div className="container py-5">
            <h1 className="mb-4">Tableau de bord</h1>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card bg-primary text-white shadow-sm">
                        <div className="card-body">
                            <h5><i className="bi bi-folder"></i> Projets</h5>
                            <h2>{stats.projets}</h2>
                            <Link to="/admin/projets" className="text-white">
                                Gérer <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card bg-success text-white shadow-sm">
                        <div className="card-body">
                            <h5><i className="bi bi-tools"></i> Compétences</h5>
                            <h2>{stats.competences}</h2>
                            <Link to="/admin/competences" className="text-white">
                                Gérer <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card bg-info text-white shadow-sm">
                        <div className="card-body">
                            <h5><i className="bi bi-envelope"></i> Messages</h5>
                            <h2>{stats.messages}</h2>
                            <Link to="/admin/messages" className="text-white">
                                Voir <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;