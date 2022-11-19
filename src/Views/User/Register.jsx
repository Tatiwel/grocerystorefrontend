import React from "react";
import { useNavigate } from 'react-router-dom';
import "../../Styles/App.css";
import Button from "react-bootstrap/Button";

function Register() {
    const navigate = useNavigate();
    return (
        <div className="App">
            <header className="App-header">
                <div className='cx register'>
                    <h1>Cadastro:</h1>
                    <div className='input'>
                        <input className="cad" type="text" placeholder="Nome " ></input>
                        <input className="cad" type="email" placeholder="Email "></input>
                        <input className="cad" type="senha" placeholder="Senha "></input>
                        <input className="cad" type="senha" placeholder="Informe a senha novamente "></input>
                    </div>
                    <Button href="/user/register">Cadastrar</Button>
                    <Button onClick={() => navigate(-1)}>Voltar</Button>
                </div>
            </header>
        </div>

    );
}

export default Register;