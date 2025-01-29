import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./carrinho.module.css"; 

function Carrinho() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1>Meu Carrinho</h1>
                <p>Confira os produtos adicionados ao seu carrinho.</p>

                <div className={styles.cartItems}>
                    <p>Seu carrinho está vazio.</p>
                    {/* Aqui você pode adicionar a lógica para listar os produtos do carrinho */}
                </div>

                <div className={styles.cartSummary}>
                    <h2>Total: R$ 0,00</h2>
                    <button className={styles.checkoutButton} disabled>Finalizar Compra</button>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Carrinho;
