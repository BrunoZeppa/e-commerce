import { createSlice } from '@reduxjs/toolkit';

export const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState: {

    },
    reducers: {
        setUserLogin: (state, action) => {
            return action.payload
        },
        setTokenLogin: (state, action) =>{
            return{
                ...state,
                token: action.payload
            }
        }
    }
})

export const { setUserLogin, setTokenLogin } = userLoginSlice.actions;

export default userLoginSlice.reducer;
