import React from 'react'
import {Link} from 'react-router-dom'

const Login = props => {
    return (
        <div>
            <div className='top-center'>
                <img src='img/logo-if.png' alt='Logo IF' width='50%' />

                <h2>ADMINISTRADOR</h2>
            </div>
            <div className='middle-left'>
                <img src='img/logo-jornada.png' alt='Logo Jornada' />
            </div>
            <div className='middle-right'>
                <form action='inicio'>
                    <label for='email'><b>EMAIL</b></label><br />
                    <input type='text' id='email' name='email' /><br />
                    <label for='senha'><b>SENHA</b></label><br />
                    <input type='password' id='password' name='senha' /><br />
                    <input class='button' type='submit' value='ENTRAR' />
                </form>
                <Link to="/login">Esqueceu a senha?</Link>
                <h3>Para acessar o menu principal, modifique index.tsx linha 53.</h3>
            </div>
        </div>
    )
}

export default Login