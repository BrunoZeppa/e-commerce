import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/GetConfig';
import { setIsLoading } from './isLoadingSlice';

export const mySlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: (action, state) =>{
            const purchases = action.payload
            return purchases
        }

    }
})

export const getPurchasesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", getConfig())
        .then((res) => dispatch(setPurchases(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setPurchases } = mySlice.actions;

export default mySlice.reducer;
