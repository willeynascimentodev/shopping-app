import { useState, useContext, useEffect } from 'react'
import CartContext from '../context/CartContext'
import ProductContext from '../context/ProductContext'

function CartItem({ item }) {

    const { updateItem } = useContext(CartContext)
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
                <img src={ item.img } alt="" />
            </div>
            <div className='item-cart-info'>
                <div className="item-cart-name">
                    { item.name }
                </div>
                <div className='item-cart-price'>
                    { item.price }
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
