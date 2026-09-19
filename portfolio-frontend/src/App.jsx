import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Projets from './pages/Projets';
import ProjetDetail from './pages/ProjetDetail';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import APropos from './pages/APropos';

import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ProjetsAdmin from './pages/admin/ProjetsAdmin';
import ProjetForm from './pages/admin/ProjetForm';
import CompetencesAdmin from './pages/admin/CompetencesAdmin';
import MessagesAdmin from './pages/admin/MessagesAdmin';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="d-flex flex-column min-vh-100">
                    <Navbar />
                    <main className="flex-grow-1">
                        <Routes>
                            {/* Routes publiques */}
                            <Route path="/" element={<Home />} />
                            <Route path="/projets" element={<Projets />} />
                            <Route path="/projets/:id" element={<ProjetDetail />} />
                            <Route path="/competences" element={<Competences />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/a-propos" element={<APropos />} />

                            {/* Login admin */}
                            <Route path="/admin/login" element={<Login />} />

                            {/* Routes protégées (admin) */}
                            <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                            <Route path="/admin/projets" element={<ProtectedRoute><ProjetsAdmin /></ProtectedRoute>} />
                            <Route path="/admin/projets/create" element={<ProtectedRoute><ProjetForm /></ProtectedRoute>} />
                            <Route path="/admin/projets/:id/edit" element={<ProtectedRoute><ProjetForm /></ProtectedRoute>} />
                            <Route path="/admin/competences" element={<ProtectedRoute><CompetencesAdmin /></ProtectedRoute>} />
                            <Route path="/admin/messages" element={<ProtectedRoute><MessagesAdmin /></ProtectedRoute>} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;