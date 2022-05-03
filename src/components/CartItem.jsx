import { useState, useContext, useEffect } from 'react'
import CartContext from '../context/CartContext'
import ProductContext from '../context/ProductContext'

function CartItem({ item }) {

    const { updateItem } = useContext(CartContext)
    const { products, product, getProduct } = useContext(ProductContext)
    const [amount, setAmount] = useState(item.amount)

    const incDecAmount = (value) => {
        const newAmount = amount + value
        setAmount(newAmount)
        updateItem(item.product_id, newAmount)
    }

    useEffect(() => {
        
    }, [])

    return (
        <div className='item-cart'>
            <div className='item-cart-img'>
                {/* <img src={ product.img[0] } alt="imagem" /> */}
            </div>
            <div className='item-cart-info'>
                <div className="item-cart-name">
                    { product.name }
                </div>
                <div className='item-cart-price'>
                    { product.price }
                </div>
                <div className='item-cart-btns'>
                    <button
                        className='btn-inc-dec'
                        onClick={ () => incDecAmount(-1) }
                    >
                        -
                    </button>
                    <input 
                        className='number-cart'
                        type="number" 
                        name="amount" 
                        id="amount" 
                        value = { amount }
                        disabled
                    />
                    <button
                        className='btn-inc-dec'
                        onClick={ () => incDecAmount(+1) }
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
