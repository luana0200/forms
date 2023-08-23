import { Link } from 'react-router-dom'
import '../css/geral.css'

export default function Header(){
    return(
        <div className='container'>
            <h1>LOCADORA</h1>
           <Link to='Cliente'><button>Cadastre-se</button></Link>
        </div>
    
    )
}