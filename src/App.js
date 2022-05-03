import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import OrderPlaced from './pages/OrderPlaced';
import Product from './pages/Product';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext'
import index from './index.css'
import Ops from './pages/Ops';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ProductProvider> 
      <CartProvider> 
        <Router>
          <div className='contain-all'>
            <Routes>
              <Route path='/' element={ <Home />} />
              <Route path='/cart' element={ <Cart />} />
              <Route path='/order-placed' element={ <OrderPlaced />} />
              <Route path='/product/:productId' element={ <Product />} />
              <Route path='/ops/:pageName' element={ <Ops />} />
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </CartProvider> 
    </ProductProvider>
  )
}

export default App
