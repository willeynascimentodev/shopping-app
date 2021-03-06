import { useEffect, useContext } from 'react'
import { BsBell } from 'react-icons/bs'
import { FaRegComment, FaShoppingCart, FaAngleLeft } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import CartContext from '../context/CartContext'
import logo from '../assets/img/logo.jpg'

function Header() {
    
    const location = useLocation()
    const { cart } = useContext(CartContext)
    const navigate = useNavigate()
    
    const pathMatchRoute = (route, ex) => {
        if(route === location.pathname && ex) {
            return true
        } else if(location.pathname.includes(route) && !ex) {
            return true
        }
        return false
    }
    
    return (
        <div className="header">
            { pathMatchRoute('/order-placed', true)  ? ( <FaAngleLeft onClick={ () => navigate('/cart') } className='left-0 icons'/> ) : null}
            { pathMatchRoute('/product/', false) ? (  <FaAngleLeft onClick={ () => navigate('/') } className='left-0 icons'/> ) : null}

            <img className="logo" src={ logo } alt="" />

            { pathMatchRoute('/', true) ? ( <BsBell onClick={ () => navigate('/ops/notifications') } className='icons right'/> ) : null}
            { pathMatchRoute('/', true) ? ( <FaRegComment onClick={ () => navigate('/ops/messages') } className="icons right" /> ) : null}

            { pathMatchRoute('/cart', true) ? ( <BsBell onClick={ () => navigate('/ops/notifications') } className='icons right'/> ) : null}
            { pathMatchRoute('/cart', true) ? ( <FaRegComment onClick={ () => navigate('/ops/messages') } className="icons right" /> ) : null}
            
            { pathMatchRoute('/product/', false) ? ( 
                
                <span onClick={ () => navigate('/cart') } className='icons right'>
                    <FaShoppingCart />
                    <span className="amount">
                        <span>
                            { cart.length }
                        </span>
                    </span>
                </span> 
            ): null}

        </div>
    )
}

export default Header
