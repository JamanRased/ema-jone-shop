import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb";

const useProducts = (products)=>{
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        if (products.length){
            const savedCart = getStoredCart();
            const storeCart = [];
            for (const key in savedCart){
                const addedProduct = products.find(product =>product.key === key);
                    //set Quanttity
                    if (addedProduct){
                        const quqntity = savedCart[key];
                        addedProduct.quqntity = quqntity;
                        storeCart.push(addedProduct);
                    }
            }
            setCart(storeCart);
        }
    }, [products])
    return [cart, setCart];
}

export default useProducts;