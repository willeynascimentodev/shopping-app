import app from '../assets/app.svg'
import bea from '../assets/bea.svg'
import sho from '../assets/sho.svg'
import all from '../assets/all.svg'
import { useNavigate } from 'react-router-dom'

function Categories() {
  const navigate = useNavigate()

  return (
    <>
     <section className="container mx-auto">
          <h2>Categories</h2>
          <div className="categories">
              <div onClick={ () => navigate('/ops/apparel') } className="category-back category-container">
                <div className="category-back cat-app">
                    <img src={ app } alt="" />
                </div>
                <div className='category-desc'>
                    Apparel
                </div>
              </div>
              <div onClick={ () => navigate('/ops/beauty') } className="category-back category-container">
                <div className="category-back cat-bea">
                        <img src={ bea } alt="" />
                </div>
                <div className='category-desc'>
                    Beauty
                </div>
              </div>
              <div onClick={ () => navigate('/ops/shoes') } className="category-back category-container">
                <div className="category-back cat-sho">
                        <img src={ sho } alt="" />
                </div>
                <div className='category-desc'>
                    Shoes
                </div>
              </div>
              <div onClick={ () => navigate('/ops/all') } className="category-back category-container">
                <div className="category-back cat-all">
                        <img src={ all } alt="" />
                </div>      
                <div className='category-desc'>
                    See All
                </div>   
              </div>
         
          </div>
        </section>
    </>
  )
}

export default Categories
