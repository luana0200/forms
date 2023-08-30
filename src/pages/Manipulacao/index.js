import React, { useEffect, useState } from "react"
import apiBack from '../../services/apiBack'
import { FiTrash2, FiEdit } from "react-icons/fi";
import { toast } from 'react-toastify'
import '../../css/geral.css'


export default function Manipulacao() {
    const [dados, setDados] = useState([''])

    useEffect(() => {
        async function visualizaDados() {
            const response = await apiBack.get('/visualizaDados')
                setDados(response.data)
        }
        visualizaDados()
    }, [dados])

    async function handleDelete(id) {
        await apiBack.delete(`/deleteUser/${id}`)
        toast.error(`Apagado com sucesso`)
    }

    async function handleUpdate(codCliente) {
        await apiBack.get(`/atualizaDados/${codCliente}`)
        toast.success(`Cliente encontrado com sucesso`)
    }

    return (
        <div>
            <h1>Manipular e Visualizar Dados</h1>
            {dados.map((dados) => {
                return (
                    <article key={dados.id_cliente}>
                        <strong>{dados.codCliente}</strong>
                        <strong>{dados.nome}</strong>
                        <strong>{dados.cidade}</strong>
                        <strong >
                            <FiEdit size='1.5rem' color='gray'
                                onClick={() => handleUpdate(dados.codCliente)} />
                        </strong>
                        <strong>
                            <FiTrash2 size='1.5rem' color='red'
                                onClick={() => handleDelete(dados.id_cliente)} />
                        </strong>
                    </article>
                )
            })}
        </div>

    )
}