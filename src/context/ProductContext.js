import { createContext, useEffect, useState } from "react"

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])

    useEffect ( () => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const response = await fetch(`http://localhost:5000/product?_sort=id&_order=desc`)
        const data = await response.json()
        setProducts(data)
        setLoading(false)
    }

    const getProduct = async (id) => {
        const response = await fetch(`http://localhost:5000/product/${id}`, { method: 'GET' })
        const data = await response.json()
        setProduct(data)
        setLoading(false)
    }
    
    return <ProductContext.Provider value={{
        loading,
        getProduct,
        fetchProducts,
        products,
        product,
    }}>
        { children }
    </ProductContext.Provider>
}

export default ProductContext