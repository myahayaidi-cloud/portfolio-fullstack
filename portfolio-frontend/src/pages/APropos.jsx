function APropos() {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">À propos de moi</h1>

            <div className="row">
                <div className="col-md-4 text-center mb-4">
                    <img
                        src="/images/profile.jpg"
                        alt="Yahaya Idi Mahaman Laouali"
                        className="rounded-circle shadow mb-3"
                        style={{ width: '250px', height: '250px', objectFit: 'cover' }}
                    />
                    <h3>Yahaya Idi Mahaman Laouali</h3>
                    <p className="text-muted">Assistant Suivi-Évaluation (MEAL/SERA)</p>
                    <a
                        href="/cv/Yahaya_Idi_Mahaman_Laouali_CV.pdf"
                        download
                        className="btn btn-primary"
                    >
                        <i className="bi bi-download"></i> Télécharger mon CV
                    </a>
                </div>

                <div className="col-md-8">
                    {/* Profil */}
                    <section className="mb-4">
                        <h4 className="text-primary">Profil</h4>
                        <p>
                            Diplômé en hydrogéologie (Master, prospection et gestion des ressources en eau souterraine),
                            avec une expérience de terrain en suivi-évaluation acquise sur deux projets d'infrastructure
                            hydraulique au Niger. Compétent en collecte et contrôle qualité de données
                            (KoboToolbox/KoboCollect, capteurs automatiques), suivi d'indicateurs techniques et
                            rédaction de rapports.
                        </p>
                    </section>

                    {/* Expérience */}
                    <section className="mb-4">
                        <h4 className="text-primary">Expérience professionnelle</h4>

                        <div className="mb-3">
                            <h5>Stagiaire hydrogéologue — Projet RETO-DOSSO</h5>
                            <p className="text-muted mb-1">
                                Nexus eau-énergie-alimentation, région de Dosso (TH Köln / Université Abdou Moumouni) | 07/2022 – 07/2024
                            </p>
                            <ul>
                                <li>Suivi hydrologique bihebdomadaire d'une mare temporaire et de trois forages via capteurs automatiques et sonde manuelle</li>
                                <li>Contrôle de la réalisation de trois forages d'eau (mai 2023) : suivi de chantier et vérification de conformité technique</li>
                                <li>Appui à l'aménagement de la mare</li>
                                <li>Mise en place et utilisation d'outils de collecte de données (KoboCollect) pour le suivi-évaluation</li>
                                <li>Contribution au reporting technique périodique et au contrôle qualité des données</li>
                            </ul>
                        </div>

                        <div className="mb-3">
                            <h5>Appui à la supervision hydraulique et environnementale</h5>
                            <p className="text-muted mb-1">
                                Programme MCA-Niger / PRAPS, financement MCC — Bureau d'étude AGECRHAU | 06/2023 – 01/2024
                            </p>
                            <ul>
                                <li>Assistance à Dr Hassane Saley Abdel Kader, superviseur hydraulique</li>
                                <li>Suivi de l'exécution des activités terrain et contrôle de conformité</li>
                                <li>Collecte et vérification des données techniques</li>
                                <li>Appui à la coordination des équipes terrain et contribution à la rédaction des rapports techniques</li>
                            </ul>
                        </div>
                    </section>

                    {/* Formation */}
                    <section className="mb-4">
                        <h4 className="text-primary">Formation académique</h4>
                        <ul>
                            <li><strong>Master en prospection et gestion durable des eaux souterraines</strong> — Université Abdou Moumouni, Niamey</li>
                            <li><strong>Licence en Géosciences et environnement</strong> — Université Abdou Moumouni, Niamey</li>
                        </ul>
                    </section>

                    {/* Formations complémentaires */}
                    <section className="mb-4">
                        <h4 className="text-primary">Formations complémentaires</h4>
                        <ul>
                            <li>Introduction à l'eau, l'assainissement et l'hygiène (WASH) dans les situations d'urgence — DisasterReady (décembre 2023)</li>
                            <li>Les fondements de l'action humanitaire — DisasterReady (mars 2024)</li>
                            <li>Planification de camps pour des habitats sécurisés — DisasterReady (septembre 2024)</li>
                            <li>Réactivité envers les clients et redevabilité envers les populations affectées (AAP) — IRC / DisasterReady (mai 2025)</li>
                            <li>Certificat sur les bases du MEAL — DisasterReady (mai 2025)</li>
                        </ul>
                    </section>

                    {/* Langues */}
                    <section className="mb-4">
                        <h4 className="text-primary">Langues</h4>
                        <ul>
                            <li>Français (courant)</li>
                            <li>Hausa et Zarma (terrain)</li>
                            <li>Anglais (technique — lecture)</li>
                            <li>Arabe (technique — lecture)</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default APropos;