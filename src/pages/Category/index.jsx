import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../../service/api'
import './Category.css'


function Category() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        async function loadApi() {

            const response = await api.get("/products")

            const apiRepons = response.data


            let filtrar = apiRepons.filter((prod) => {
                return (prod.category) === (`${id}`)

            })

            setProducts(filtrar)
            setLoading(false)



        }

        loadApi()

    }, [])

    if (loading) {
        return (
            <h1>Carregando...</h1>
        )
    }


    return (
        <div className='list-products'>
            <div className='Link'>
                <Link to={'/'}><i className="fa-solid fa-arrow-left"></i> Voltar para página inicial</Link>
            </div>
         
            <h1>Categoria {id}</h1>

            <ul>
                {products.map((p) => {
                    return (
                        <li key={p.id}>
                            <img src={p.image} alt={`imagem do produto ${p.title}`} />
                            <h2>{p.title}</h2>
                            <p>Preço: US${p.price}</p>
                            <div className='actions'>
                                <Link to={`/products/${p.id}`}><button className='buy'>COMPRAR</button></Link>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Category