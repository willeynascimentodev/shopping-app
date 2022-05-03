import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import check from '../assets/check.svg'
import { FaAngleRight }  from 'react-icons/fa'

function OrderPlaced() {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <div className="contain-body" style={{ textAlign: 'center', paddingTop: '40px' }}>
        <div className='rounded-blue'>
          <img src={ check } alt="" />
        </div>
        <h1>Order Placed</h1>
        <p>Your order was placed successfully. For more details, check All My Orders Page under Profile tab</p>
        <button  
          onClick={ () => navigate('/ops/order-placed')  }
          className='btn btn-pri'
          style = {{ marginTop: '90px' }}
        >
          MY ORDERS <span className='icon-btn'><FaAngleRight/></span>
        </button>
      </div>
    </>
  )
}

export default OrderPlaced
