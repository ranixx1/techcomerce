import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./login.module.css"; 

function Login() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1>Login</h1>
                <p>Digite suas credenciais para acessar sua conta</p>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
                    </div>
                    <button type="submit" className={styles.button}>Entrar</button>
                </form>
                <p className={styles.registerText}>Ainda não tem uma conta? <a href="/cadastro" className={styles.registerLink}>Cadastre-se</a></p>
            </main>
            <Footer />
        </>
    );
}

export default Login;
