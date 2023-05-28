import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const CustomContext = createContext()
export const Context = (props) => {

    const [products, setProducts] = useState([])

    const [basket, setBasket] = useState([])
    
    const [fav, setFav] = useState([])

    // const [cartItems, setCartItems] = useState([])
    

    

    // console.log(basket)

    useEffect(() => {
        axios('http://localhost:3004/products')
            .then(({ data }) => setProducts(data))
    }, []);

    const addToCart = (item) => {
        setBasket((prevItem) => [...prevItem, item])
    }

    const addToBasket = (item) => {
        setBasket((prevItem) => [...prevItem, item])
    }
    const addToFav = (item) => {
        setFav((prevItem) => [...prevItem, item])
    }



    const value = {
        products,
        addToCart,
        addToBasket,
        basket,
        addToFav,
        fav
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}

export default CustomContext