import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Produtos from './pages/produtos/index';
import MaisVendidos from './pages/MaisVendidos/index';
import OfertasDoDia from './pages/OfertasDoDia/index';
import Contatos from './pages/Contatos/index';
import Usuarios from './pages/Usuarios/login';
import Carrinho from './pages/Carrinho/carrinho';
import Cadastro from './pages/Cadastro/cadastro';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/maisvendidos" element={<MaisVendidos />} />
                <Route path="/ofertasdodia" element={<OfertasDoDia />} />
                <Route path="/contatos" element={<Contatos />} />
                <Route path="/login" element={<Usuarios />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
