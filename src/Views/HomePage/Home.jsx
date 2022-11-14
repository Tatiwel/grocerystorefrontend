import React from "react";
import "../../Styles/App.css";
import Button from "react-bootstrap/Button";

function Home() {
    return (
        <div className="Home">
            <div className="titulo">
                <h1> Bem Vindo à Mercearia Itabaiana</h1>
                <div className="cx login mt-4">
                    <h4>Já possui cadastro</h4>
                    <Button href="/login">Login </Button>
                    <h4>Crie um conta</h4>
                    <Button href="/user/register">Cadastre-se</Button>
                </div>
            </div>
        </div>
    );
}
export default Home;
