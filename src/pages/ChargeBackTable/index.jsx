import React, { Fragment, useEffect, useState } from 'react'
import { AiOutlineStock } from 'react-icons/ai'
import { Table, DropdownButton, Dropdown } from 'react-bootstrap'
import './ChargeBackTable.css'
import { IconContext } from 'react-icons'
import OptionsButton from '../../components/OptionsButton'






const ChargeBackTable = (props) => {



    return (
        <Fragment>
            <IconContext.Provider value={{ color: 'rgb(64, 99, 146)' }}>
                <div>
                    <OptionsButton />
                </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ color: 'red' }}>
                <Table className='' striped hover responsive size='md'>
                    <thead className='table-head rounded p-2'>
                        <tr>
                            <th >Nº CLIENTE</th>
                            <th>CLIENTE</th>
                            <th >QTD. CHARGEBACK</th>
                            <th >VALOR CHARGEBACK</th>
                            <th className='chargeback'>QTD. VENDAS</th>
                            <th>VALOR TOTAL</th>
                            <th id='thcenter' >% CHARGEBACK</th>
                            <th className='chargeback'>% TOTAL CHARGEBACK</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        <tr>
                            <td>26174</td>
                            <td>RUDY BARTLET</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >72</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>2983</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >58</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >26</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0001</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >15</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >5</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >5</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >5</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >5</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.03%</td>
                        </tr>


                    </tbody>
                </Table>
            </IconContext.Provider>

        </Fragment>
    )
}

export default ChargeBackTable