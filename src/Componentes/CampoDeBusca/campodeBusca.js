import React from "react";
import estilos from './CampodeBusca.module.css' 

const CampoBusca = (props)=>{
    return(
        <section className={estilos.campoBusca}>

            <label className={estilos.label} for="txt"><img className={estilos.img} src="/assets/lupa.png" alt="lupa"/></label>
            <input className={estilos.input} type="text"
                name="txt"
                id="txt"
                placeholder="Pesquise aqui por um dos pratos do nosso cardapio"
                value={props.valor}
                onChange={props.funcao}
            />

        </section>
    )
}
export default CampoBusca