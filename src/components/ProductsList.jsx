import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductContext from '../context/ProductContext'
import Loading from './Loading'

function ProductsList() {

  const { products, loading } = useContext(ProductContext)
  const navigate = useNavigate()
  useEffect(()=> {
      
  }, [])

  return (
    <section className='cards'>
        {
          products.map((item) => (
            <>
              <div onClick={ () => navigate('/product/'+item.id) } key={ item.id } className="card">
                <div className="card-image">
                  <img src={ item.img[0] } alt="" />
                </div>
                <div className="card-text">{ item.name }</div>
                <div className="card-price">{ item.price }</div>

              </div>
            </>
          )) 
        }
    </section>
  )
}

export default ProductsList
