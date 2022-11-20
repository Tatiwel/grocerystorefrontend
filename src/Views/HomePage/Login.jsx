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
                    <div className='input'>
                        <h1>Login</h1>

                        <input className="cad mt-2" type='email' placeholder='ex@ex.com.br' />

                        <input className="cad mt-2" type="password" placeholder='Senha' />
                    </div>
                    <Button >Entrar </Button>
                    <Button onClick={() => navigate(-1)}>Voltar</Button>
                </div>
            </header >
        </div >
    );
}
export default Login;