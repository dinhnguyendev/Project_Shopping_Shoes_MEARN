import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        addcart: {
            currentCart: false,
            isFetching: false,
            error: false
        },
        getcart: {
            currentCart: [],
            isFetching: false,
            error: false
        },
        addnumber: {
            isFetching: false,
            currentNumber: Number,
            error: true
        },
        deletecart: {
            isFetching: false,
            error: false,
            currentCart: false
        },
        payCart: {
            isFetching: false,
            error: false,
            currentPay: null
        },
        getToPay: {
            isFetching: false,
            error: false,
            currentPay: null
        },

    },
    reducers: {
        addToCartStart: (state) => {
            state.addcart.currentCart = null;
            state.addcart.isFetching = true;
            state.addcart.error = false;
        },
        addToCartSuccess: (state) => {
            state.addcart.isFetching = false;
            state.addcart.currentCart = true;
            state.addcart.error = false;
        },
        addToCartFailed: (state) => {
            state.addcart.isFetching = false;
            state.addcart.currentCart = null;
            state.addcart.error = true;
        },
        getToCartStart: (state) => {
            state.getcart.isFetching = true;
            state.getcart.currentCart = [];
            state.getcart.error = false;
        },
        getToCartSuccess: (state, action) => {
            state.getcart.isFetching = false;
            state.getcart.currentCart = action.payload;
            state.getcart.error = false;
        },
        getToCartFailed: (state) => {
            state.getcart.isFetching = false;
            state.getcart.currentCart = [];
            state.getcart.error = true;
        },
        addNmuberCartStart: (state) => {
            state.addnumber.isFetching = true;
            state.addnumber.currentNumber = Number;
            state.addnumber.error = false;
        },
        addNumberCartSuccess: (state, action) => {
            state.addnumber.isFetching = false;
            state.addnumber.currentNumber = action.payload;
            state.addnumber.error = false;
        },
        addNumberCartFailed: (state) => {
            state.addnumber.isFetching = false;
            state.addnumber.currentNumber = Number;
            state.addnumber.error = true;
        },
        deleteCartStart: (state) => {
            state.deletecart.isFetching = true;
            state.deletecart.error = false;
            state.deletecart.currentCart = false;
        },
        deleteCartSuccess: (state) => {
            state.deletecart.isFetching = false;
            state.deletecart.error = false;
            state.deletecart.currentCart = true;
        },
        deleteCartFailed: (state) => {
            state.deletecart.isFetching = false;
            state.deletecart.error = true;
            state.deletecart.currentCart = false;
        },
        payCartStart: (state) => {
            state.payCart.isFetching = true;
            state.payCart.currentPay = null;
            state.payCart.error = false;
        },
        payCartSuccess: (state, action) => {
            state.payCart.isFetching = false;
            state.payCart.currentPay = action.payload;
            state.payCart.error = false;
        },
        payCartFailed: (state) => {
            state.payCart.isFetching = false;
            state.payCart.currentPay = null;
            state.payCart.error = true;
        },
        getToPayStart: (state) => {
            state.getToPay.isFetching = true;
            state.getToPay.currentPay = null;
            state.getToPay.error = false;
        },
        getToPaySuccess: (state, action) => {
            state.getToPay.isFetching = false;
            state.getToPay.currentPay = action.payload;
            state.getToPay.error = false;
        },
        getToPayFailed: (state) => {
            state.getToPay.isFetching = false;
            state.getToPay.currentPay = null;
            state.getToPay.error = true;
        },


    }
});
export const {
    addToCartStart, addToCartFailed, addToCartSuccess,
    getToCartFailed, getToCartSuccess, getToCartStart,
    addNmuberCartStart, addNumberCartSuccess, addNumberCartFailed,
    deleteCartFailed, deleteCartStart, deleteCartSuccess,
    payCartFailed, payCartStart, payCartSuccess,
    getToPayFailed, getToPayStart, getToPaySuccess,

} = cartSlice.actions;
export default cartSlice.reducer;