import React from "react";
import styles from './Cards.module.css'

const Card = (props) =>{
    return(
        <div className={styles.box}>
            <div className={styles.imagem}>
                {props.children}
                {/*<img src={props.imagem} alt={props.nome}/>*/}
            </div>
            <div className={styles.descricao}>
                <div>
                    <h3>{props.nome}</h3>
                    <small>{props.categoria}</small>
                    <p>{props.descricao}</p>
                </div>
                <span>{props.preco}</span>
            </div>
        </div>
    )
}
export default Card