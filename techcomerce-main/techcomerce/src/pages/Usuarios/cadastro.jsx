import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./cadastro.module.css";

function Cadastro() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState({
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: ""
    });

    const buscarEndereco = async () => {
        if (cep.length === 8) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();
                if (!data.erro) {
                    setEndereco({
                        logradouro: data.logradouro,
                        bairro: data.bairro,
                        localidade: data.localidade,
                        uf: data.uf
                    });
                } else {
                    alert("CEP não encontrado");
                }
            } catch (error) {
                alert("Erro ao buscar o CEP");
            }
        }
    };

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
                        <label htmlFor="cep">CEP:</label>
                        <input 
                            type="text" 
                            id="cep" 
                            name="cep" 
                            placeholder="Digite seu CEP" 
                            value={cep} 
                            onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))} 
                            onBlur={buscarEndereco} 
                            maxLength={8} 
                            required 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="logradouro">Endereço:</label>
                        <input type="text" id="logradouro" name="logradouro" value={endereco.logradouro} readOnly />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="bairro">Bairro:</label>
                        <input type="text" id="bairro" name="bairro" value={endereco.bairro} readOnly />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" value={endereco.localidade} readOnly />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="uf">Estado:</label>
                        <input type="text" id="uf" name="uf" value={endereco.uf} readOnly />
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
