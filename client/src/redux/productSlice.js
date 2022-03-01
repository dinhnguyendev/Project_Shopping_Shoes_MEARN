import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name: "products",
    initialState: {
        product: {
            isFetching: false,
            allproduct: [],
            error: false
        },
        productdetails: {
            isFetching: false,
            productdetail: null,
            error: false
        }
    },
    reducers: {
        getproductStart: (state) => {
            state.product.isFetching = true;
            state.product.allproduct = [];
            state.product.error = false;
        },
        getproductSuccsess: (state, action) => {
            state.product.isFetching = false;
            state.product.allproduct = action.payload;
            state.product.error = false;
        },
        getproductFailed: (state) => {
            state.product.isFetching = false;
            state.product.allproduct = [];
            state.product.error = true;
        },
        getdetailsStart: (state) => {
            state.productdetails.isFetching = true;
            state.productdetails.productdetail = null;
            state.productdetails.error = false;
        },
        getdetailsSuccsess: (state, action) => {
            state.productdetails.isFetching = false;
            state.productdetails.productdetail = action.payload;
            state.productdetails.error = false;
        },
        getdetailsFailed: (state) => {
            state.productdetails.isFetching = false;
            state.productdetails.productdetail = null;
            state.productdetails.error = true;
        }
    }
});
export const {
    getproductFailed,
    getproductStart,
    getproductSuccsess,
    getdetailsSuccsess,
    getdetailsStart,
    getdetailsFailed } = productSlice.actions;
export default productSlice.reducer;