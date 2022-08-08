import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setIsLoading } from "./isLoadingSlice";

export const userPurchasesSlice = createSlice({
  name: "userPurchases",
  initialState: [],
  reducers: {
    setUserPurchases: (state, action) => {
      const userPurchases = action.payload;
      return userPurchases;
    },
  },
});

export const getUserPurchasesById = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`, getConfig())
    .then((res) => dispatch(setUserPurchases(res.data.data.purchases)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setUserPurchases } = userPurchasesSlice.actions;

export default userPurchasesSlice.reducer;
