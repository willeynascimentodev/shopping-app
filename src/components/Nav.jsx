import { useContext } from 'react'
import { FaHome, FaSearch, FaShoppingCart, FaGripLines, FaUserAlt } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import CartContext from '../context/CartContext'



function Nav() {

  const location = useLocation()
  const navigate = useNavigate()
  const { cart, productsList } = useContext(CartContext)

  const pathMatchRoute = (route) => {
    if(route === location.pathname) {
        return true
    }
    return false
  }

  return (
    <nav className='nav'>
        <div onClick={ () => navigate('/') } className={ pathMatchRoute('/') ? "nav-btn nav-active" : "nav-btn" }>
            <div className="nav-icon"> <FaHome /> </div>
            <div className="nav-text">Home</div>
        </div>

        <div onClick={ () => navigate('/ops/search') } className={ pathMatchRoute('/ops/search') ? "nav-btn nav-active" : "nav-btn" }>
            <div className="nav-icon"> <FaSearch /> </div>
            <div className="nav-text">Search</div>
        </div>

        <div onClick={ () => navigate('/cart') } className={ pathMatchRoute('/cart') ? "nav-btn nav-active" : "nav-btn" }>
            <div className="nav-icon"> <FaShoppingCart /> </div>
            <span className="amount-nav">
                <span>
                    { cart ? cart.length : 0}
                </span>
            </span>
            <div className="nav-text">Cart</div>
        </div>

        <div onClick={ () => navigate('/ops/profile') } className={ pathMatchRoute('/ops/profile') ? "nav-btn nav-active" : "nav-btn" }>
            <div className="nav-icon"> <FaUserAlt /> </div>
            <div className="nav-text">Profile</div>
        </div>

        <div onClick={ () => navigate('/ops/more') } className={ pathMatchRoute('/ops/more') ? "nav-btn nav-active" : "nav-btn" }>
            <div className="nav-icon">  <FaGripLines /> </div>
            <div className="nav-text">More</div>
        </div>
    </nav>
  )
}

export default Nav
