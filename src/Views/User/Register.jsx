import React from "react";
import "../../Styles/App.css";
import Button from "react-bootstrap/Button";

function Register() {
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
                </div>
            </header>
        </div>

    );
}

export default Register;