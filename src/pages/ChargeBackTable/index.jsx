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
                    <DropdownButton size='sm' className='dropdown' title="">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>

                <Table striped hover responsive size='sm'>
                    <thead className='table-head rounded'>
                        <tr>
                            <th >Nº CLIENTE</th>
                            <th>CLIENTE</th>
                            <th>QTD. CHARGEBACK</th>
                            <th className=''>VALOR CHARGEBACK</th>
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
                            <td><AiOutlineStock />0.05%</td>
                            <td><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>2983</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >58</td>
                            <td>R$ 32,000</td>
                            <td><AiOutlineStock />0.05%</td>
                            <td><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >26</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0001</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >15</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >5</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >5</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >5</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >5</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>ESMEE ALFORD</td>
                            <td >1</td>
                            <td>R$ 38,92</td>
                            <td >8</td>
                            <td>R$ 32,000</td>
                            <td ><AiOutlineStock />0.05%</td>
                            <td ><AiOutlineStock />0.05%</td>
                        </tr>


                    </tbody>
                </Table>
            </IconContext.Provider>
        </Fragment>
    )
}

export default ChargeBackTable