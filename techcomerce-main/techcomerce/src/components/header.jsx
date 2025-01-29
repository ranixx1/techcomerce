import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header-top"></div>
            <div className="header-content">
                <div className="logo">
                    <Link to="/"> <img src="/image5.jpeg" alt="Logo" /></Link>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Pesquisar produtos" />
                    <button>Buscar</button>
                </div>
                <div className="user-options">
                    <Link to="/Login">Olá, faça seu login</Link> {/* Corrigido */}
                    <Link to="/Carrinho">Carrinho</Link> {/* Corrigido */}
                </div>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Produtos">Produtos</Link></li>
                    <li><Link to="/OfertasDoDia">Ofertas do Dia</Link></li>
                    <li><Link to="/MaisVendidos">Mais Vendidos</Link></li>
                    <li><Link to="/Contatos">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
