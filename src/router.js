import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import Category from './pages/Category'
import Carrinho from './pages/Carrinho'
import Search from './pages/Search'
import Footer from './components/Footer/index'
import Notfaund from './pages/Notfaund/Notfaund'

function loadRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                
                <Route path='/' element={<Home />} />
                <Route path='/products/:id' element={<Products />} />
                <Route path='/carrinho' element={<Carrinho />} />
                <Route path='/categoria/:id' element={<Category/>} />
                <Route path='/search' element={<Search/>} />


                
                <Route path='*' element={<Notfaund />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default loadRoutes