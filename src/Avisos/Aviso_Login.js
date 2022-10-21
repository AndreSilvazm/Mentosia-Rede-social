import React from 'react';
import { Link } from 'react-router-dom';

function Aviso_Login() {
    return (
        <div>

            <h1>Você não esta conectado, faça o login para acessar essa pagina</h1>
            <Link to='/'>Pagina de Login</Link>
            
        </div>
    );
}

export default Aviso_Login;