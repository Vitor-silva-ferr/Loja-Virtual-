import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../../service/api'
import Banner from './img.png'
import './Home.css'


function Home() {

    const [products, setProducts] = useState([])
    const [categorypr, setCategorypr] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadApi() {

            const response = await api.get("products")
            // Endpoints
            const categoryEnd = await api.get("products/categories")


            setProducts(response.data)
            setCategorypr(categoryEnd.data)
            setLoading(false)




        }

        loadApi()


    }, [])

    if (loading) {
        return (
            <div className='list-products'>
                <h1>Carregando...</h1>
            </div>
        )
    }


    return (
        <div className='containerProducts'>

            <ul className='category'>

                {categorypr.map(cat => {
                    return (
                        <Link to={`/categoria/${cat}`}><li>{cat}</li></Link>
                    )
                })}

            </ul>

            <img src={Banner} alt='Imagem de oferta de produtos' />

            <div className='list-products'>
                <h1>● Todos os Produtos</h1>

                <ul>
                    {products.map((p) => {
                        return (
                            <li key={p.id}>
                                <img src={p.image} alt={`imagem do produto ${p.title}`} />
                                <h2>{p.title}</h2>
                                <p>Preço: US${p.price}</p>
                                <div className='actions'>
                                    <Link to={`products/${p.id}`}><button className='buy'>COMPRAR</button></Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>

            </div>

        </div>
    )
}

export default Home