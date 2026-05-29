import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Header.css'
import api from '../../service/api'


function Header() {

    return (
        <div>

            <header>

                <Link to={'/'}>
                    <h1>
                        <i className="fa-solid fa-shop"></i>
                        DevShop
                    </h1>
                </Link>

                <div className='search'>
                    <input
                        type='search'
                        placeholder='Buscar produtos...'
                    />
                    <button className='buttonSearch' ><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className='carrinho'>

                    <Link to={'/carrinho'}>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Link>

                </div>

            </header>

            <div className='div-s'></div>

        </div>
    )
}

export default Header