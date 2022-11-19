import React from "react";
import { useNavigate } from 'react-router-dom';
import "../../Styles/App.css";
import Button from "react-bootstrap/Button";

function Login() {
    const navigate = useNavigate();
    return (
        <div className="App">
            <header className="App-header">
                <div className='cx login'>
                    <h1>Login</h1>
                    <input type='email' placeholder='ex@ex.com.br' />
                    <input type="password" placeholder='Senha' />
                    <Button className='btn login'>Entrar </Button>
                    <Button onClick={() => navigate(-1)}>Voltar</Button>
                </div>
            </header >
        </div >
    );
}
export default Login;