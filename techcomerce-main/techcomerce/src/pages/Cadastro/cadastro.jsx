import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./cadastro.module.css"; 

function Cadastro() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1>Cadastro</h1>
                <p>Preencha os campos abaixo para criar sua conta</p>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" placeholder="Digite seu nome" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword">Confirme sua senha:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirme sua senha" required />
                    </div>
                    <button type="submit" className={styles.button}>Cadastrar</button>
                </form>
                <p className={styles.loginText}>Já tem uma conta? <a href="/login" className={styles.loginLink}>Faça login</a></p>
            </main>
            <Footer />
        </>
    );
}

export default Cadastro;
