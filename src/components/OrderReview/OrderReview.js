import React from 'react';
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key =>{
        const newCart = cart.filter(product=> product.key !== key)
        setCart(newCart)
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
            </div>
            <h2>{products.length}</h2>
            <h2>{cart.length}</h2>
        </div>
    );
};

export default OrderReview;