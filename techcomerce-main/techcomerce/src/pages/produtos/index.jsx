import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./produtos.module.css"; 

function Produtos() {
    // Simulação de produtos
    const produtos = [
        { id: 1, nome: "Smartphone X", preco: "R$ 1.999,99", imagem: "/produto1.jpg" },
        { id: 2, nome: "Notebook Gamer", preco: "R$ 4.599,99", imagem: "/produto2.jpg" },
        { id: 3, nome: "Fone Bluetooth", preco: "R$ 199,99", imagem: "/produto3.jpg" },
        { id: 4, nome: "Relógio Inteligente", preco: "R$ 299,99", imagem: "/produto4.jpg" },
        { id: 5, nome: "Câmera Profissional", preco: "R$ 3.299,99", imagem: "/produto5.jpg" },
        { id: 6, nome: "Monitor 4K", preco: "R$ 1.499,99", imagem: "/produto6.jpg" },
        { id: 7, nome: "Câmera Profissional", preco: "R$ 3.299,99", imagem: "/produto5.jpg" },
        { id: 8, nome: "Monitor 4K", preco: "R$ 1.499,99", imagem: "/produto6.jpg" }
    ];

    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1>Conheça nossos produtos</h1>
                <p>Encontre os melhores produtos com preços incríveis!</p>

                {/* Grid de produtos */}
                <div className={styles.productsGrid}>
                    {produtos.map((produto) => (
                        <div key={produto.id} className={styles.product}>
                            <img src={produto.imagem} alt={produto.nome} />
                            <h2>{produto.nome}</h2>
                            <p className={styles.price}>{produto.preco}</p>
                            <button>Adicionar ao Carrinho</button>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Produtos;
