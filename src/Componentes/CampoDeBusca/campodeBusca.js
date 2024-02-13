import React from "react";
import estilos from './CampodeBusca.module.css' 

const CampoBusca = (props)=>{
    return(
        <>
            <img className={estilos.img} src="/assets/lupa.png" alt="lupa"/>
            <input className={estilos.input} type="text"
                placeholder="Busque por uma refeição..."
                value={props.valor}
                onChange={props.funcao}
            />
        </>
    )
}
export default CampoBusca