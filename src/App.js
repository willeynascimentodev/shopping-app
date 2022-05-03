import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import OrderPlaced from './pages/OrderPlaced';
import Product from './pages/Product';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext'
import index from './index.css'
import Ops from './pages/Ops';


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
      </CartProvider> 
    </ProductProvider>
  )
}

export default App
