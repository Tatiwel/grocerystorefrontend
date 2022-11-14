import React from "react";
import "../../Styles/App.css";
import { Button } from 'react-bootstrap';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <div className='cx login'>
                    <h1>Login</h1>
                    <input type='email' placeholder='ex@ex.com.br' />
                    <input type="password" placeholder='Senha' />
                    <Button className='btn login'>Entrar </Button>
                </div>
            </header >
        </div >
    );
}
export default Login;