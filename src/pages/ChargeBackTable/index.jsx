import React, { Fragment, useEffect, useState } from 'react'
import { AiOutlineStock } from 'react-icons/ai'
import { Table, DropdownButton, Dropdown } from 'react-bootstrap'
import './ChargeBackTable.css'
import { IconContext } from 'react-icons'



const ChargeBackTable = () => {



    return (
        <Fragment>
            <IconContext.Provider value={{ color: 'red' }}>
                <div className='table-head position-absolute top-0 end-0'>
                    <DropdownButton size='md' className='dropdown text-light' title="">
                        <Dropdown.Header className='text-dark fw-bold'>Linhas por página</Dropdown.Header>
                        <Dropdown.Item href="#/action-1">Padrão</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">50 linhas</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className='text-dark fw-bold'>Colunas</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Nº Cliente</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">Cliente</Dropdown.Item>
                        <Dropdown.Item href="#/action-6">Qtd Chargeback</Dropdown.Item>
                        <Dropdown.Item href="#/action-7">Valor chargeback</Dropdown.Item>
                        <Dropdown.Item href="#/action-8">Qtd Vendas</Dropdown.Item>
                        <Dropdown.Item href="#/action-9">Valor Total</Dropdown.Item>
                        <Dropdown.Item href="#/action-10">% Chargeback</Dropdown.Item>
                        <Dropdown.Item href="#/action-11">% Total Chargeback</Dropdown.Item>
                        <Dropdown.Item href="#/action-12">Status</Dropdown.Item>
                    </DropdownButton>
                </div>

                <Table striped hover responsive size='md'>
                    <thead className='table-head rounded'>
                        <tr>
                            <th >Nº CLIENTE</th>
                            <th>CLIENTE</th>
                            <th >QTD. CHARGEBACK</th>
                            <th >VALOR CHARGEBACK</th>
                            <th className='chargeback'>QTD. VENDAS</th>
                            <th>VALOR TOTAL</th>
                            <th className='chargeback'>% CHARGEBACK</th>
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
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>2983</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >58</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >26</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0001</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >15</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >5</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >5</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >5</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >5</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                            <td className='text-danger'><AiOutlineStock />0.05%</td>
                        </tr>


                    </tbody>
                </Table>
            </IconContext.Provider>
        </Fragment>
    )
}

export default ChargeBackTable