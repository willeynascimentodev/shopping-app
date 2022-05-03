import { createContext, useContext, useEffect, useState } from "react"
import ProductContext from "./ProductContext"


const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [productsList, setProducts] = useState(0)
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const { products } = useContext(ProductContext)
    

    

    const cartStorage = JSON.parse(localStorage.getItem('cart'))

    useEffect ( () => {
        if(cartStorage !== null) {
            setCart(cartStorage)
        } else {
            localStorage.setItem('cart', JSON.stringify([]))
        }
        setProducts(cart.length)
        totalPriceCalc()

    }, [])

    const getCartStorage = () => {
        return JSON.parse(localStorage.getItem('cart'))
    }

    const totalPriceCalc = () => {
        var price = 0
        getCartStorage().map((item) =>{
          
          if(products.length > 0) {
            var prod = products?.filter((product) => product.id == item.product_id+"")
            var prodPrice = prod[0].price
            prodPrice = prodPrice.replace(" ", "")
            prodPrice = prodPrice.replace("$", "")
            prodPrice = prodPrice.replace(",", "")
            prodPrice = prodPrice.replace(".", "")
            prodPrice = parseFloat(prodPrice)
            price += (item.amount * prodPrice)/100
            
          }
          
        })
        
        var total = price.toLocaleString('en',{style: 'currency', currency: 'USD'});
        
        setTotalPrice(total)
        
    }

    const setItem = (data) => { 
        cartStorage.push(data)
        localStorage.setItem('cart', JSON.stringify(cartStorage))
        setCart(cartStorage)
        totalPriceCalc()
    }

    const addItem = (id) => {
        const data = {
            product_id: id,
            amount: 1,
        
        }
        
        if (getItem(id).length == 0) {
            setItem(data)
        }   
        setProducts(cart.length)
    }

    const updateItem = (id, newAmount) => {
        
        if (getItem(id).length != 0) { 
            const data = getItem(id)[0]

            if(newAmount <= 0) {
                deleteItem(id)
            } else {
                data.amount = newAmount
                const resp = cart.filter((item) => item.product_id !== id+"")
                resp.push(data)
                setCart([])
                setCart(resp)
                localStorage.setItem('cart', JSON.stringify(cart))  
            }
        } 
        setProducts(cart.length)
        totalPriceCalc()
    }

    const getItem = (id) => {
        return cart.filter((item) => item.product_id === id+"")
    }

    const deleteItem = (id) => {
        const data = cart.filter((item) => item.product_id !== id+"")
        setCart(data)
        localStorage.setItem('cart', JSON.stringify(data))
        setProducts(cart.length)
        totalPriceCalc()
    }
    
    return <CartContext.Provider value={{
        addItem,
        updateItem,
        getItem,
        deleteItem,
        cart,
        productsList,
        totalPrice
    }}>
        { children }
    </CartContext.Provider>
}

export default CartContext