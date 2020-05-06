import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => {
    return (
        <div className="topnav">
            <Link to='/inicio'>INÍCIO</Link>
            <Link to='/trabalhos'>TRABALHOS</Link>
            <Link to='/check_in'>CHECK-IN TEMPO REAL</Link>
            <Link to='/avaliacoes'>AVALIAÇÕES TEMPO REAL</Link>
            <Link to='/almoco'>ALMOÇO TEMPO REAL</Link>
            <Link to='/avaliadores'>AVALIADORES</Link>
            <Link to='/participantes'>PARTICIPANTES</Link>
            <Link to='/categorias'>CATEGORIAS</Link>
        </div>
    )

}

export default Menu