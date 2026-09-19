import { Link } from 'react-router-dom';

function ProjetCard({ projet }) {
    return (
        <div className="card h-100 shadow-sm">
            <img
                src={projet.image || 'https://via.placeholder.com/300x150?text=Projet'}
                className="card-img-top"
                alt={projet.titre}
                style={{ height: '180px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{projet.titre}</h5>
                <p className="card-text text-muted small">
                    {projet.description.substring(0, 100)}...
                </p>
                <p className="text-primary small">
                    <i className="bi bi-code-slash"></i> {projet.technologies}
                </p>
                <Link to={`/projets/${projet.id}`} className="btn btn-sm btn-primary mt-auto">
                    Voir détails
                </Link>
            </div>
        </div>
    );
}

export default ProjetCard;