import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getData } from '../helpers/api'
import '../styles/usersList.scss'

const UsersApi = () => {

    const navigate = useNavigate();

    const [modal, setModal] = useState(false)
    const [usuarios, setusuarios] = useState([]);
    const [elegido, setElegido] = useState({}); //datos para el modal de usuario seleccionado
    const [page, setPage] = useState(1); //pagina de listado de usuarios

    const getUsuarios = async (page) => {
        const usuarios = await getData(page);
        setusuarios(usuarios)
    }

    useEffect(() => {
        getUsuarios(page)
    }, [page])

    const openModal=(usuario)=>{
        setElegido(usuario);
        setModal(true);
    }

    return (
        <section id='usersList'>
            <div className='nav'>
                <button onClick={() => navigate('/')}>Home</button>
                <h2>Lista de usuarios</h2>
            </div>
            <div className='Cont'>
                {
                    usuarios.map(u =>
                        <div onClick={()=>openModal(u)} key={u.id}>
                            <h3>{u.first_name + ' ' + u.last_name}</h3>
                            <img src={u.avatar} alt="" />
                        </div>
                    )
                }
            </div>
            <div className='btnCont'>
                <button onClick={() => setPage(1)} className='back'>Back</button>
                <button onClick={() => setPage(2)} className='next'>Next</button>
            </div>
            {
                modal ?
                    <div className="modal">
                        <button onClick={()=>setModal(false)} >X</button>
                        <div>
                            <h3>{elegido.first_name + ' ' + elegido.last_name}</h3>
                            <small>Id: {elegido.id}</small>
                            <img src={elegido.avatar} alt="" />
                            <p>{elegido.email}</p>
                        </div>
                    </div>
                    : ''
            }
        </section>
    )
}

export default UsersApi