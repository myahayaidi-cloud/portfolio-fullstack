function CompetenceBar({ competence }) {
    const pourcentage = (competence.niveau / 5) * 100;

    return (
        <div className="mb-3">
            <div className="d-flex justify-content-between mb-1">
                <span className="fw-semibold">{competence.nom}</span>
                <span className="text-muted">{competence.niveau}/5</span>
            </div>
            <div className="progress" style={{ height: '10px' }}>
                <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${pourcentage}%` }}
                    aria-valuenow={pourcentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    );
}

export default CompetenceBar;