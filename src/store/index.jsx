import { configureStore } from '@reduxjs/toolkit'
import  homeSlice from './slice/home.slice'
import isLoadingSlice from './slice/isLoadingSlice'
import PurchasesSlice from './slice/Purchases.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        products: homeSlice, 
        purchases: PurchasesSlice
    }
})
