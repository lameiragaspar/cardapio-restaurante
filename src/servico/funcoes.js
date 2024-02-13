import { produtos } from "../Dados/dados-produtos.js"

export const listaProdutos= () =>{
    return produtos.filter(produto =>(
        produto.categoria === "Entradas"
    ))
}

export const filtraCategoria=(categoria) =>{
    const produtoFiltrado = produtos.filter(produto =>(
        produto.categoria === categoria
    ))
    return produtoFiltrado
}

export const buscaProduto = (txtDigitado) =>{
    return produtos.filter((produto) => (
        produto.nome.toLocaleLowerCase().includes(txtDigitado.toLocaleLowerCase()) ||
        produto.categoria.toLocaleLowerCase().includes(txtDigitado.toLocaleLowerCase())||
        produto.descricao.toLocaleLowerCase().includes(txtDigitado.toLocaleLowerCase())
    ))
}