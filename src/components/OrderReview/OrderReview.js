import React from 'react';
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router-dom';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = key =>{
        const newCart = cart.filter(product=> product.key !== key)
        setCart(newCart)
        removeFromDb(key);
    }
    const handlePlaceOrder = ()=>{
        history.push('./placeorder');
        //setCart([]);
        clearTheCart();
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                  cart.map(product =><ReviewItems 
                    key={product.key}
                    product={product}
                    handleRemove={handleRemove}
                    
                    ></ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
                <button onClick={handlePlaceOrder} className='btn-regular'>Proceed to Shipping</button>
            </div>
           
        </div>
    );
};

export default OrderReview;