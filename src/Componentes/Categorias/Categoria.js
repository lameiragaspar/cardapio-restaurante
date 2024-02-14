import React, {useState} from "react";
import Card from "../Cards/cards.js";
import CampoBusca from "../CampoDeBusca/campodeBusca.js";
import { filtraCategoria, listaProdutos, buscaProduto } from "../../servico/funcoes.js";
import styles from './Categoria.module.css'
import style from './MediasCategorias.module.css'

const SecaoCategoria = () => {
    
    const [textoDeBusca, setTextoDeBusca] = useState("")
    const [cardapio, setCardapio] = useState(listaProdutos())
    const [activeButton, setActiveButton] = useState("Entradas")

    function handlefiltraCategoria(categoria){
        setCardapio(filtraCategoria(categoria))
        setActiveButton(categoria)
        setTextoDeBusca("")
    }

    function handleBuscaProduto(txtDigitado){
        if(txtDigitado.length >= 3){
            setCardapio(buscaProduto(txtDigitado))
        }
        setTextoDeBusca(txtDigitado)
    }

    return(
        <>
            {/**Botões */}
            <section className={styles.botoes} id={style.botoes}>
                <button onClick={() => handlefiltraCategoria("Entradas")}
                className={activeButton === 'Entradas'? styles.entrada : styles.button}>
                    <img src="/assets/entrada.png" alt="Entrada"/>
                    <p>Entrada</p>
                </button>
                <button onClick={() => handlefiltraCategoria("Massas")}
                className={activeButton === 'Massas'? styles.massa : styles.button}>
                    <img src="/assets/massa.png" alt="Massa"/>
                    <p>Massa</p>
                </button>
                <button onClick={() => handlefiltraCategoria("Carnes")}
                className={activeButton === 'Carnes'? styles.carne : styles.button}>
                    <img src="/assets/carne.png" alt="Carne"/>
                    <p>Carne</p>
                </button>
                <button onClick={() => handlefiltraCategoria("Bebidas")}
                className={activeButton === 'Bebidas'? styles.bebidas : styles.button}>
                    <img src="/assets/bebidas.png" alt="Bebidas"/>
                    <p>Bebidas</p>
                </button>
                <button onClick={() => handlefiltraCategoria("Saladas")}
                className={activeButton === 'Saladas'? styles.salada : styles.button}>
                    <img src="/assets/salada.png" alt="Salada"/>
                    <p>Salada</p>
                </button>
                <button onClick={() => handlefiltraCategoria("Sobremesas")}
                className={activeButton === 'Sobremesas'? styles.sobremesa : styles.button}>
                    <img src="/assets/sobremesa.png" alt="Sobremesa"/>
                    <p>Sobremesa</p>
                </button>
            </section>
            {/**Fim dos Botões */}

            <>
                <CampoBusca 
                valor={textoDeBusca}
                funcao={(event) => handleBuscaProduto(event.target.value)}/>
            </>

            {/**Cardapio*/}
            <section className={styles.cardapio}>
                <h2>Cardápio</h2>
                <div className={styles.cardapioCards}>
                    {cardapio.map((card) =>(
                        <Card key={card.id}
                        nome={card.nome}
                        imagem={card.imagem}
                        categoria={card.categoria}
                        descricao={card.descricao}
                        preco={`R$ `+ card.preco}>
                            <div className={`${styles.id} ${styles[`id-${card.id}`]}`}>
                                
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    )
}
export default SecaoCategoria