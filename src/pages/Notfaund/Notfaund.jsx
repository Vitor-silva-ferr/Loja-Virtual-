import { Link } from 'react-router-dom'
import './Notfaund.css'


function Notfaund() {
    return (
        <div className='containerNotfaund'> 
        <h1>Erro 404</h1>
        <h2>Ops... Página não encontrada!</h2>
        <Link to={'/'}><button>Ir para produtos!</button></Link>
        </div>
    )
}

export default Notfaund