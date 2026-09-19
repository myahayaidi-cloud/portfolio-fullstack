import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projets from './pages/Projets';
import ProjetDetail from './pages/ProjetDetail';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ProjetsAdmin from './pages/admin/ProjetsAdmin';
import CompetencesAdmin from './pages/admin/CompetencesAdmin';
import MessagesAdmin from './pages/admin/MessagesAdmin';
import ProtectedRoute from './components/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import APropos from './pages/APropos';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projets" element={<Projets />} />
                    <Route path="/projets/:id" element={<ProjetDetail />} />
                    <Route path="/competences" element={<Competences />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admin/login" element={<Login />} />
                    <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/admin/projets" element={<ProtectedRoute><ProjetsAdmin /></ProtectedRoute>} />
                    <Route path="/admin/competences" element={<ProtectedRoute><CompetencesAdmin /></ProtectedRoute>} />
                    <Route path="/admin/messages" element={<ProtectedRoute><MessagesAdmin /></ProtectedRoute>} />
                    <Route path="/a-propos" element={<APropos />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;