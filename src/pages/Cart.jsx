import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartComponent from '../components/CartComponent';
import { getCartThunk } from '../store/slices/cart.slice';
import '../styles/cart.css'


const Cart = () => {

    const dispatch = useDispatch(); 
    const cart = useSelector(state => state.cart);


    useEffect(() => {
        dispatch(getCartThunk());
    },[]);
    

    return (
        <div className='cart-page'>
            <CartComponent cart={cart}/>
        </div>
    );
};

export default Cart;