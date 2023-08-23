import { useState } from "react";
import { IMaskInput } from "react-imask";
import { Link } from "react-router-dom";
import '../../css/geral.css'

export default function PessoaFisica() {
    const [CNPJ, setCNPJ] = useState('')
    const [IE, setIE] = useState('')
    const [SituacaoCadastral, setSituacaoCadastral] = useState('')


    function handleCadastro(e) {
        e.preventDefault()
        if (CNPJ === ('') || IE === ('') ||
            SituacaoCadastral === ('') ) {

            alert('CAMPOS EM BRANCO')
            return;
        }

        alert(`CNPJ: ${CNPJ} `)
    }

    return (
        <div>
            <h1>PESSOA JURíDICA</h1>
            <form onSubmit={handleCadastro}>
                <div className="centralizar">
                    <div>
                        <label>CNPJ:</label>
                        <IMaskInput className="mb"
                            mask='00.000.000/0000-00'
                            placeholder='Sua CNPJ'
                            value={CNPJ}
                            onChange={(e) => setCNPJ(e.target.value)} />

                        <label>IE:</label>
                        <IMaskInput className="mb"
                            mask='000000000.00-00'
                            placeholder='Seu IE'
                            value={IE}
                            onChange={(e) => setIE(e.target.value)} />

                        <label>Situacao Cadastral:</label>
                        <select className=" select, mb"
                            onChange={(e) => setSituacaoCadastral(e.target.value)}>
                            <option>Selecione</option>
                            <option>Habilitado  </option>
                            <option >Desabilitado </option>
                        </select>
                    </div>

                </div>
            </form >
            <Link><button onClick={handleCadastro}>Enviar</button></Link>
        </div >
    )
}