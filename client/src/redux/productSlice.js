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
        },
        addproducts: {
            isFetching: false,
            addproducts: false,
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
        },
        addproductsStart: (state) => {
            state.addproducts.isFetching = true;
            state.addproducts.addproducts = false;
            state.addproducts.error = false;
        },
        addproductsSuccess: (state) => {
            state.addproducts.isFetching = false;
            state.addproducts.addproducts = true;
            state.addproducts.error = false;
        },
        addproductsFailed: (state) => {
            state.addproducts.isFetching = false;
            state.addproducts.addproducts = false;
            state.addproducts.error = true;
        }
    }
});
export const {
    getproductFailed,
    getproductStart,
    getproductSuccsess,
    getdetailsSuccsess,
    getdetailsStart,
    getdetailsFailed,
    addproductsStart,
    addproductsSuccess,
    addproductsFailed
}
    = productSlice.actions;
export default productSlice.reducer;