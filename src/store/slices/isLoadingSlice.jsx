import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSliceSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        setIsLoading: (state, action) => { 
const isLoading = action.payload
return isLoading
        }
    }
})

export const { setIsLoading } = isLoadingSliceSlice.actions;

export default isLoadingSliceSlice.reducer;
