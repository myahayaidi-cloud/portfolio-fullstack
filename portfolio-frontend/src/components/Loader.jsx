function Loader() {
    return (
        <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Chargement...</span>
            </div>
            <p className="mt-2 text-muted">Chargement...</p>
        </div>
    );
}

export default Loader;