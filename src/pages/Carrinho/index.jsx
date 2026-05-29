import './Carrinho.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'




function Carrinho() {


    const [list, setList] = useState([])
    const [price, setPrice] = useState()

    useEffect(() => {

        function loadCarrinho() {

            const dbLocal = JSON.parse(localStorage.getItem("@carrinho")) || []
            setList(dbLocal)

        }

        loadCarrinho()

    }, [])


    useEffect(() => {

        function calc() {

            const dbLocal = JSON.parse(localStorage.getItem("@carrinho")) || []

            let valueTotal = dbLocal.reduce((acc, nmr) => {

                return acc + (nmr.price)

            }, 0)
            setPrice(valueTotal.toFixed(2))
        }
        calc()

    }, [list])

    function DeletarProduto(index) {

        const novaLista = [...list];

        novaLista.splice(index, 1);

        setList(novaLista);

        localStorage.setItem("@carrinho", JSON.stringify(novaLista));
        toast.error("Item excluído")

    }



    function FinalizarPedido() {

        const dbLocal = JSON.parse(localStorage.getItem("@carrinho")) || []

        if (dbLocal.length === 0) {
            toast.error("Seu carrinho está vazio !")
        }
        else {
            toast.success("Comprado com sucesso!")
        }
    }



    return (
        <div className='containerCarrinho'>
            <h1>🛒 Seu carrinho </h1>
            <ul>
                {list.map((p, index) => {
                    return (
                        <div key={p.id}>
                            <li>
                                <img src={p.image} />
                                <h1>{p.title}</h1>
                                <h2>US$:{p.price}</h2>
                                <div className='buttonActios'>
                                    <Link to={`/products/${p.id}`}><button className='buttonDetails'>Ver Produto</button></Link>
                                    <button className='buttonDelete' onClick={() => DeletarProduto(index)} >Excluir <i class="fa-solid fa-trash"></i></button>
                                </div>
                            </li>

                        </div>
                    )
                })}
            </ul >

            <div className='infosTotal'>
                <h1>Produtos Total: {list.length} </h1>
                <h1>Valor Total: <span>{price}</span></h1>
                <button className='Buttonpedido' onClick={FinalizarPedido} >Finalizar Pedido</button>
            </div>




        </div >
    )
}


export default Carrinho