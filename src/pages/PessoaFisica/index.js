import { IMaskInput } from "react-imask";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../../css/geral.css'

export default function PessoaFisica() {
   const [CPF, setCPF] = useState('')
   const [RG, setRG] = useState('')
   const [DataNascimento, setDataNascimento] = useState('')

  
   function handleCadastro(e) {
      e.preventDefault()
      if (CPF === ('') || RG === ('') ||
      DataNascimento === ('') ) {

          alert('CAMPOS EM BRANCO')
          return;
      }

      alert(`CPF: ${CPF}`)
  }

   return (
      <div>
         <h1>PESSOA FíSICA</h1>
         <form onSubmit={handleCadastro}>

            <div className="centralizar">
               <div>
                  <label>CPF:</label>
                  <IMaskInput className="mb"
                     mask='000.000.000-00'
                     placeholder='Seu CPF'
                     value={CPF}
                     onChange={(e) => setCPF(e.target.value )} />

                  <label>RG:</label>
                  <IMaskInput className="mb"
                     mask='00.000.000-0'
                     placeholder='Seu RG'
                     value={RG}
                     onChange={(e) => setRG(e.target.value )} />

                  <label>Data Nascimento:</label>
                  <IMaskInput className="mb"
                     mask='00/00/0000'
                     placeholder='Sua Data de Nascimento'
                     value={DataNascimento}
                     onChange={(e) => setDataNascimento(e.target.value )} />

               </div>

            </div>
         </form >
         <Link><button onClick={handleCadastro}>Enviar</button></Link>
      </div>
   )
}
