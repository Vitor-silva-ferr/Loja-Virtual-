import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../../service/api'
import './Footer.css'

function Footer() {

    const [category, setCategory] = useState([])

    useEffect(() => {

        async function loadApi() {

            const response = await api.get("/products/categories")

            setCategory(response.data)
            console.log(category)

        }

        loadApi()

    }, [])



    return (
        <div className='containerFooter'>
            <div className='liInfo'>
                <Link to={'/'}><h1><i className="fa-solid fa-shop"></i>DevShop</h1></Link>
                <h2>Sua loja parceira!</h2>
            </div>

            <div className='liInfo'>
                <h1><i class="fa-solid fa-layer-group"></i> Categorias</h1>
                <ul>
                    {category.map((c) => {
                        return (
                            <Link to={`/categoria/${c}`}><li>{c}</li></Link>
                        )
                    })}
                </ul>
            </div>

            <div className='liInfo'>
                <h1><i class="fa-solid fa-hashtag"></i> Redes Socias</h1>
                <ul>
                    <Link to={'https://www.linkedin.com/in/vitorsilva08/'} target='_blank'><li><i class="fa-brands fa-linkedin"></i> Linkedln</li></Link>
                    <Link to={'https://github.com/Vitor-silva-ferr'} target='_blank' ><li><i class="fa-brands fa-github"></i> GitHub</li></Link>
                </ul>
            </div>

        </div>
    )
}

export default Footer