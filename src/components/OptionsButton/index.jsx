import React, { useState } from "react";
import './OptionsButton.css'
import { Button } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";




function OptionsButton() {

    const [isActive, setIsActive] = useState(false)



    return (
        <div className="button-options position-absolute end-0">
            <Button className="button-icon position-absolute end-0 bg-light border-light" onClick={(e) => setIsActive(!isActive)}><FaEllipsisV /></Button>

            {isActive && (
                <div className="button-items">

                    <ul className="fw-bold">Linhas por página</ul>

                    <ul> <input className="checkbox" type="checkbox" />Padrão</ul>

                    <ul><input className="checkbox" type="checkbox" />50 linhas</ul>

                    <hr />

                    <ul className="fw-bold">Colunas</ul>

                    <ul><input className="checkbox" type="checkbox" />Nº Cliente</ul>

                    <ul><input className="checkbox" type="checkbox" />Cliente</ul>

                    <ul><input className="checkbox" type="checkbox" />Qtd. Chargeback</ul>

                    <ul> <input className="checkbox" type="checkbox" />Valor Chargeback</ul>

                    <ul><input className="checkbox" type="checkbox" />Qtd Vendas</ul>

                    <ul><input className="checkbox" type="checkbox" />Valor Total</ul>

                    <ul><input className="checkbox" type="checkbox" /> % Chargeback</ul>

                    <ul><input className="checkbox" type="checkbox" /> % Total Chargeback</ul>

                    <ul><input className="checkbox" type="checkbox" />Status</ul>




                </div>
            )}

        </div>

    )

}


export default OptionsButton;
