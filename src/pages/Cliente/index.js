import { IMaskInput } from "react-imask"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import apiCEP from '../../services/apiCEP'
import apiBack from "../../services/apiBack"
import '../../css/cliente.css'

import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function Cliente() {
    const navigate = useNavigate()

    
    const [codCliente, setCodCliente] = useState('')
    const [nome, setNome] = useState('')
    const [tel_Fixo, setTel_Fixo] = useState('')
    const [tel_Celular, setTel_Celular] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [buscaCEP, setbuscaCEP] = useState('')



    // codigoCliente automatico
    useEffect(() => {
        function codigoCliente() {
            setCodCliente(Math.round(Math.random() * 10000))
        }
        codigoCliente()
    }, [])


    // function que completa os endereço atraves do CEP
    async function handleCep() {
        if (cep.length < 9 || cep.length > 9) {
            alert('CEP Incorreto')
        } else {
            const response = await apiCEP.get(`/${cep}/json/`)
            if (response.data.erro === true) {
                alert('CEP Inexistente')
            } else {
                setbuscaCEP(response.data)
            }
        }
    }


    useEffect(() => {
        function addbuscaCEP() {
            setRua(buscaCEP.logradouro || rua)
            setBairro(buscaCEP.bairro || bairro)
            setCidade(buscaCEP.localidade || cidade)
            setEstado(buscaCEP.uf || estado)
        }
        addbuscaCEP()
    }, [handleCep])

    // function para declarar o alert e o Backend
    async function handleCadastro(e) {
        e.preventDefault()
        if (nome === '' || tel_Celular === '') {
            alert(`!!Campos em branco!!`)
            return;
        }
        await apiBack.post('/cadastroClientes', {
            codCliente,
            nome,
            tel_Celular,
            tel_Fixo,
            cep,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        })
        toast.success('Cadastro feito com sucesso')
        navigate('/Manipulacao')
    }

    return (
        <div>
            <h1>CADASTRE-SE</h1>
            {/* className para centrarlizar com colunas */}
            <form className="centro1" onSubmit={handleCadastro}>
                <div>
                    <label>Código do Cliente:  </label>
                    <IMaskInput className="mb"
                        type='number'
                        disabled
                        value={codCliente}
                        onChange={(e) => setCodCliente(e.target.value)}
                    />
                    

                    <label>Nome:  </label>
                    <IMaskInput className="mb"
                        type='text'
                        placeholder='Seu Nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} />

                    <label>Telefone Fixo:  </label>
                    <IMaskInput className="mb"
                        mask='(00) 0000-0000'
                        placeholder='Seu Telefone'
                        value={tel_Fixo}
                        onChange={(e) => setTel_Fixo(e.target.value)} />

                    <label>Telefone Celular:  </label>
                    <IMaskInput className="mb"
                        mask='(00) 00000-0000'
                        placeholder='Seu Telefone'
                        value={tel_Celular}
                        onChange={(e) => setTel_Celular(e.target.value)} />
                </div>

                <div>
                    <label>CEP: </label>
                    <IMaskInput className="mb"
                        mask='00000-000'
                        placeholder='Seu CEP'
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        onBlur={handleCep}
                    />


                    {/* tem o DISABLED para evitar que o usuario cometa erros */}
                    <label>Rua: </label>
                    <IMaskInput className="mb"
                        type='text'
                        placeholder='Seu Endereço'
                        value={rua}
                        disabled
                    // onChange={(e) => setRua(e.target.value)}

                    />

                    <label>Número da Casa: </label>
                    <IMaskInput className="mb"
                        placeholder='Seu Endereço'
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)} />

                    <label>Complemento: </label>
                    <IMaskInput className="mb"
                        type='text'
                        placeholder='Seu Endereço'
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)} />

                </div>

                <div>
                    <label>Bairro: </label>
                    <IMaskInput className="mb"
                        type='text'
                        value={bairro}
                        disabled
                    // onChange={(e) => setBairro(e.target.value)}

                    />

                    <label>Cidade: </label>
                    <IMaskInput className="mb"
                        type='text'
                        placeholder='Seu Endereço'
                        value={cidade}
                        disabled
                    // onChange={(e) => setCidade(e.target.value)}

                    />

                    <label>Estado: </label>
                    <IMaskInput className="mb"
                        type='text'
                        placeholder='Seu Endereço'
                        value={estado}
                        disabled
                    // onChange={(e) => setEstado(e.target.value)}

                    />
                </div>

            </form >
            <div className="buttoncenter">
                <Link to='/PessoaFisica'><button >Pessoa Fisica</button></Link>
                <Link to='/PessoaJuridica'><button >Pessoa Juridica</button></Link>
                <Link><button onClick={handleCadastro}>Enviar</button></Link>
            </div>
        </div>
    )
}