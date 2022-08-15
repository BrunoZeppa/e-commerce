import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoadingSlice';

export const homeSlice = createSlice({
    name: 'home',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
           const products = action.payload
           return products
        },
        filterProductsByPrice: (state, action) => {
            return state.filter(product => product.price >= action.payload.minPrice && product.price <= action.payload.maxPrice)
        }
    }
})


export const getProductsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/")
        .then((res) => dispatch(setProducts(res.data?.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterTitleThunk = searchValue => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${searchValue}`)
        .then(res => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterCategoryThunk = (categoryID) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${categoryID}`)
        .then(res => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterPriceThunk = ({ minPrice, maxPrice }) => (dispatch) => {
    dispatch(setIsLoading(true))
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
        .then((res) => dispatch(setProducts(res.data.data.products)))
        .then(() => dispatch(filterProductsByPrice({ minPrice, maxPrice })))
        .finally(() => dispatch(setIsLoading(false)));
}



export const { setProducts, filterProductsByPrice } = homeSlice.actions;

export default homeSlice.reducer;
