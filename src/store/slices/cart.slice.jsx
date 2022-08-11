import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig.jsx';
import { setIsLoading } from './isLoadingSlice';

export const cartSlice = createSlice({

    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            return action.payload
        }
    }
});

export const getCartThunk = () => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
        .then(res => dispatch(setCart(res.data.data.cart.products)))
        .catch(error => console.log(error))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addToCartThunk = ( id, quantity) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
        .post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', { id, quantity }, getConfig())
        .then(() => dispatch(getCartThunk()))
        .catch(error => console.log(error))
        .finally(() => dispatch(setIsLoading(false)));
}

export const removeProductThunk = id => dispatch => {
    dispatch(setIsLoading(false));
    return axios
    .delete('https://ecommerce-api-react.herokuapp.com/api/v1/cart/' + id, getConfig())
    .then(() => dispatch(getCartThunk()))
    .catch(error => console.log(error.response))
    .finally(()=> dispatch(setIsLoading(false)));
}


export const increaseQuantityThunk = (quantity, id) => dispatch => {
    return axios
        .patch("https://ecommerce-api-react.herokuapp.com/api/v1/cart", { id: id, newQuantity: quantity + 1 }, getConfig())
        .then(() => dispatch(getCartThunk()))
}

export const decreaseQuantityThunk = (quantity, id ) => dispatch =>{
    return axios
    .patch("https://ecommerce-api-react.herokuapp.com/api/v1/cart", {id: id, newQuantity: quantity -1}, getConfig())
    .then(() => dispatch( getCartThunk()))
}

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
