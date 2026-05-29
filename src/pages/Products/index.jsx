import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../service/api'
import './Products.css'
import { ToastContainer, toast } from 'react-toastify'


function Products() {

    const { id } = useParams()
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const [carrinho, setCarrinho] = useState([])

    useEffect(() => {

        async function loadProducts() {

            const response = await api.get(`/products/${id}`)

            setProducts(response.data)
            setLoading(false)
        }

        loadProducts()

    }, [])


    useEffect(() => {

        const dbLocal = JSON.parse(localStorage.getItem("@carrinho")) || []

        setCarrinho(dbLocal)

    }, [])

    function addCarrinho() {

        const newCarrinho = [...carrinho, products]
        setCarrinho(newCarrinho)
        localStorage.setItem("@carrinho", JSON.stringify(newCarrinho))
        toast.success("Produto adicionado ao carrinho!")

    }






    if (loading) {
        return (
            <div className='container'>
                <h1>Carregando...</h1>
            </div>
        )
    }



    return (
        <div className='container'>
            <Link to={'/'}><i className="fa-solid fa-arrow-left"></i> Voltar para página inicial</Link>

            <div className='product'>

                <div className='title'>
                    <h1>{products.title}</h1>
                    <img src={products.image} alt={` Imagem do produto ${products.title}`} />
                </div>

                <div className='info'>
                    <h1>Descrição do produto: {products.description}</h1>
                    <p>Preço: US${products.price}</p>
                    <button className='buy' onClick={addCarrinho}>Adicionar ao carrinho<i class="fa-solid fa-cart-plus"></i></button>
                    <h1 className='avaliation'>Avaliações do produto : {products.rating.rate}</h1>
                    <h1 className='avaliation'>Quantidade de Avaliações: {products.rating.count}</h1>

                </div>

            </div>



        </div>
    )
}

export default Products