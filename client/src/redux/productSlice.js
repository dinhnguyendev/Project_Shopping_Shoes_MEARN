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
            addproducts: null,
            error: false
        },
        fixproducts: {
            isFetching: false,
            products: null,
            error: false
        },
        fixproductsAll: {
            isFetching: false,
            products: null,
            error: false
        },
        color: {
            isFetching: false,
            products: [],
            error: false
        },
        size: {
            isFetching: false,
            products: [],
            error: false
        },
        adddetails: {
            isFetching: false,
            products: null,
            error: false
        },
        deletedetails: {
            isFetching: false,
            products: null,
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
            state.addproducts.addproducts = null;
            state.addproducts.error = false;
        },
        addproductsSuccess: (state, action) => {
            state.addproducts.isFetching = false;
            state.addproducts.addproducts = action.payload;
            state.addproducts.error = false;
        },
        addproductsFailed: (state) => {
            state.addproducts.isFetching = false;
            state.addproducts.addproducts = null;
            state.addproducts.error = true;
        },
        fixproductsStart: (state) => {
            state.fixproducts.isFetching = true;
            state.fixproducts.products = null;
            state.fixproducts.error = false;
        },
        fixproductsSuccess: (state, action) => {
            state.fixproducts.isFetching = false;
            state.fixproducts.products = action.payload;
            state.fixproducts.error = false;
        },
        fixproductsFailed: (state) => {
            state.fixproducts.isFetching = false;
            state.fixproducts.products = null;
            state.fixproducts.error = true;
        },
        fixproductsAllStart: (state) => {
            state.fixproductsAll.isFetching = true;
            state.fixproductsAll.products = null;
            state.fixproductsAll.error = false;
        },
        fixproductsAllSuccess: (state, action) => {
            state.fixproductsAll.isFetching = false;
            state.fixproductsAll.products = action.payload;
            state.fixproductsAll.error = false;
        },
        fixproductsAllFailed: (state) => {
            state.fixproductsAll.isFetching = false;
            state.fixproductsAll.products = null;
            state.fixproductsAll.error = true;
        },
        colorStart: (state) => {
            state.color.isFetching = true;
            state.color.products = [];
            state.color.error = false;
        },
        colorSuccess: (state, action) => {
            state.color.isFetching = false;
            state.color.products = action.payload;
            state.color.error = false;
        },
        colorFailed: (state) => {
            state.color.isFetching = false;
            state.color.products = [];
            state.color.error = true;
        },
        sizeStart: (state) => {
            state.size.isFetching = true;
            state.size.products = [];
            state.size.error = false;
        },
        sizeSuccess: (state, action) => {
            state.size.isFetching = false;
            state.size.products = action.payload;
            state.size.error = false;
        },
        sizeFailed: (state) => {
            state.size.isFetching = false;
            state.size.products = [];
            state.size.error = true;
        },
        adddetailsStart: (state) => {
            state.adddetails.isFetching = true;
            state.adddetails.products = null;
            state.adddetails.error = false;
        },
        adddetailsSuccess: (state, action) => {
            state.adddetails.isFetching = false;
            state.adddetails.products = action.payload;
            state.adddetails.error = false;
        },
        adddetailsFailed: (state) => {
            state.adddetails.isFetching = false;
            state.adddetails.products = null;
            state.adddetails.error = true;
        },
        deletedetailsStart: (state) => {
            state.deletedetails.isFetching = true;
            state.deletedetails.products = null;
            state.deletedetails.error = false;
        },
        deletedetailsSuccess: (state, action) => {
            state.deletedetails.isFetching = false;
            state.deletedetails.products = action.payload;
            state.deletedetails.error = false;
        },
        deletedetailsFailed: (state) => {
            state.deletedetails.isFetching = false;
            state.deletedetails.products = null;
            state.deletedetails.error = true;
        },
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
    addproductsFailed,
    fixproductsFailed, fixproductsStart, fixproductsSuccess,
    fixproductsAllFailed, fixproductsAllStart, fixproductsAllSuccess,
    colorFailed, colorStart, colorSuccess,
    sizeFailed, sizeStart, sizeSuccess,
    adddetailsFailed, adddetailsStart, adddetailsSuccess
    , deletedetailsStart, deletedetailsFailed, deletedetailsSuccess
}
    = productSlice.actions;
export default productSlice.reducer;