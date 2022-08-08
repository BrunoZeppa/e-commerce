import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart.slice';
import homeSlice from './slices/home.slice';
import isLoadingSlice from './slices/isLoadingSlice';
import userLoginSlice  from './slices/userLogin.slice';
import userPurchasesSlice  from './slices/userPurchases.slice';


export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        products: homeSlice, 
        userPurchases: userPurchasesSlice,
        userLogin: userLoginSlice,
        cart: cartSlice
    }
})
