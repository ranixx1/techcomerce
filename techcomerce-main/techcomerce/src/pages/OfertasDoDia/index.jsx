import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./ofertas.module.css"; 

function OfertasDoDia() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1>As melhores Ofertas estão aqui!</h1>
                <p>Aproveite os descontos especiais do dia!</p>

                {/* Div para exibir os produtos em oferta */}
                <div className={styles.productsGrid}>
                    <div className={styles.product}>
                        <img src="/modelo.jpg" alt="Produto 1" />
                        <h2>Produto 1</h2>
                        <p className={styles.price}>R$ 99,99</p>
                        <button>Comprar</button>
                    </div>
                    <div className={styles.product}>
                        <img src="/modelo.jpg" alt="Produto 2" />
                        <h2>Produto 2</h2>
                        <p className={styles.price}>R$ 79,99</p>
                        <button>Comprar</button>
                    </div>
                    <div className={styles.product}>
                        <img src="/modelo.jpg" alt="Produto 3" />
                        <h2>Produto 3</h2>
                        <p className={styles.price}>R$ 59,99</p>
                        <button>Comprar</button>
                    </div>
                    <div className={styles.product}>
                        <img src="/modelo.jpg" alt="Produto 4" />
                        <h2>Produto 4</h2>
                        <p className={styles.price}>R$ 129,99</p>
                        <button>Comprar</button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default OfertasDoDia;
