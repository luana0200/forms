import { BrowserRouter, Routes, Route } from "react-router-dom"

import Cliente from "./pages/Cliente"
import Header from "./Header"
import PessoaFisica from "./pages/PessoaFisica"
import PessoaJuridica from './pages/PessoaJuridica'
import Manipulacao from './pages/Manipulacao/index'

export default function Rotas(){
    return(

        <BrowserRouter>
        <Header/>
        <Routes>

            <Route path="/Cliente" element={<Cliente/>}/>
            <Route path="/PessoaFisica" element={<PessoaFisica/>}/>
            <Route path="/PessoaJuridica" element={<PessoaJuridica/>}/>
            <Route path="/Manipulacao" element={<Manipulacao/>}/>
        </Routes>
        </BrowserRouter>
    )
}