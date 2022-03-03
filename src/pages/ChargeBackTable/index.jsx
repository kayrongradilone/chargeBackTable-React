import React, { Fragment, useEffect, useState } from 'react'
import { MdOutlineModeEditOutline as EditIcon, MdOutlineClose as CloseIcon } from 'react-icons/md'
import { Table } from 'react-bootstrap'
import './ChargeBackTable.css'
import { IconContext } from 'react-icons'
import OptionsButton from '../../components/OptionsButton'
import axios from 'axios'




const ChargeBackTable = (props) => {

    const [info, setInfo] = useState({ clients: [] })
    useEffect(() => {
        const fetchDataTable = async () => {
            const { data } = await axios('https://jsonplaceholder.typicode.com/users')

            setInfo({ clients: data })
            console.log(data)
        }
        fetchDataTable()
    }, [setInfo])

    return (
        <Fragment >
            <div className='main-table  container-flex m-auto mt-5 p-1 w-75 '>
                <IconContext.Provider value={{ color: 'rgb(64, 99, 146)' }}>
                    <OptionsButton />
                </IconContext.Provider>
                <Table size='sm' striped hover className='border-light rounded'>
                    <thead className='t-head' >
                        <tr>
                            <th className='t-user'> USUÁRIO</th>
                            <th className='t-email'>EMAIL</th>
                            <th className='t-client'>CLIENTE</th>
                            <th className='t-acess'>PERFIL DE ACESSO</th>

                        </tr>
                    </thead>
                    {
                        info.clients && info.clients.map((item) => (
                            <tbody className='tbody border-light rounded'>
                                <tr>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.name}</td>
                                    <td><p className='perfil-name bg-info rounded-pill badge text-secondary text-wrap ' >NOME DO PERFIL</p></td>
                                    <td className='text-primary text-end'><EditIcon /> </td>
                                    <td className='text-danger'><CloseIcon /></td>

                                </tr>
                            </tbody>
                        ))
                    }
                </Table>
            </div>

        </Fragment>
    )
}

export default ChargeBackTable