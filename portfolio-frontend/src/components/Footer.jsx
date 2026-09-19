function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-5">
            <div className="container">
                <p className="mb-1">© 2026 Yahaya Idi Mahaman Laouali — Tous droits réservés</p>
                <p className="mb-0">
                    <a href="https://www.linkedin.com/in/mahaman-laouali-yahaya-idi-913913331" target="_blank" rel="noreferrer" className="text-white me-3">
                        <i className="bi bi-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/myahayaidi-cloud" target="_blank" rel="noreferrer" className="text-white me-3">
                        <i className="bi bi-github"></i> GitHub
                    </a>
                    <a href="mailto:myahayaidi@gmail.com" className="text-white">
                        <i className="bi bi-envelope"></i> Email
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;