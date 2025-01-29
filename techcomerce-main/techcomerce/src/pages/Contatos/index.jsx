import React from "react"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from  "./contato.module.css";

function Contatos(){
    return (
        <>
        <Header />
        <main className={styles.container}>
            <h1>Entre em contato</h1>
            <p>Preencha o Formulário abaixo e entraremos em contato o mais rápido possível</p>
            <form className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
                
                    </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" rows="4" placeholder="Digite sua mensagem" required />
                        </div>
                        <button type="submit" className={styles.button}>Enviar</button>

            </form>

        </main>
        <Footer/>
        </>
    );
}
export default Contatos;