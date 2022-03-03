import React, { useState } from "react";
import './OptionsButton.css'
import { Button } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";




function OptionsButton() {

    const [isActive, setIsActive] = useState(false)



    return (
        <>
            <div className="position-absolute end-0">
                <Button className="button-icon bg-transparent border-0 position-absolute end-0" onClick={(e) => setIsActive(!isActive)}><FaEllipsisV /></Button>

                {isActive && (
                    <div className="button-options">

                        <ul className="fw-bold">Linhas por página</ul>

                        <ul> <input className="checkbox-pattern" type="checkbox" />Padrão</ul>

                        <ul><input className="checkbox-lines" type="checkbox" />50 linhas</ul>

                        <hr className="fixed-line" />

                        <ul className="fw-bold">Colunas</ul>

                        <ul><input className="checkbox-user" type="checkbox" />Usuário</ul>

                        <ul><input className="checkbox-email" type="checkbox" />E-mail</ul>

                        <ul><input className="checkbox-client" type="checkbox" />Cliente</ul>

                        <ul> <input className="checkbox-profile" type="checkbox" />Perfil de acesso</ul>

                    </div>

                )}
            </div>
        </>

    )


}


export default OptionsButton;
