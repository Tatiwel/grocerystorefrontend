import React from "react";
import "../../Styles/App.css";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="Home">
            <div className="titulo">
                <h1> Bem Vindo à Mercearia Itabaiana</h1>
                <div className="cx login">
                    <h4>Já possui cadastro</h4>
                    <Button onClick={() => navigate("/login")}>Login</Button>
                    <h4>Crie um conta</h4>
                    <Button onClick={() => navigate("/register")}>Cadastrar-se</Button>
                </div>
            </div>
        </div>
    );
}
export default Home;
