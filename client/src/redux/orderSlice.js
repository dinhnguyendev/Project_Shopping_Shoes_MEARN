import { createSlice } from "@reduxjs/toolkit";
const orderSlice = createSlice({
    name: "order",
    initialState: {
        addOrder: {
            isFetching: false,
            currentOrder: null,
            error: false
        },
        getOrder: {
            isFetching: false,
            currentOrder: [],
            error: false
        },
        getOrderDetails: {
            isFetching: false,
            currentOrder: null,
            error: false
        },
        checkOrder: {
            isFetching: false,
            currentOrder: null,
            error: false
        },
        getOrderByUserId: {
            isFetching: false,
            currentOrder: null,
            error: false
        },

    },
    reducers: {
        addOrderStart: (state) => {
            state.addOrder.isFetching = true;
            state.addOrder.currentOrder = null;
            state.addOrder.error = false;
        },
        addOrderSuccess: (state, action) => {
            state.addOrder.isFetching = false;
            state.addOrder.currentOrder = action.payload;
            state.addOrder.error = false;
        },
        addOrderFailed: (state) => {
            state.addOrder.isFetching = false;
            state.addOrder.currentOrder = null;
            state.addOrder.error = true;
        },
        getOrderStart: (state) => {
            state.getOrder.isFetching = true;
            state.getOrder.currentOrder = [];
            state.getOrder.error = false;
        },
        getOrderSuccess: (state, action) => {
            state.getOrder.isFetching = false;
            state.getOrder.currentOrder = action.payload;
            state.getOrder.error = false;
        },
        getOrderFailed: (state) => {
            state.getOrder.isFetching = false;
            state.getOrder.currentOrder = [];
            state.getOrder.error = true;
        },
        getOrderDetailsStart: (state) => {
            state.getOrderDetails.isFetching = true;
            state.getOrderDetails.currentOrder = null;
            state.getOrderDetails.error = false;
        },
        getOrderDetailsSuccess: (state, action) => {
            state.getOrderDetails.isFetching = false;
            state.getOrderDetails.currentOrder = action.payload;
            state.getOrderDetails.error = false;
        },
        getOrderDetailsFailed: (state) => {
            state.getOrderDetails.isFetching = false;
            state.getOrderDetails.currentOrder = null;
            state.getOrderDetails.error = true;
        },
        checkOrderStart: (state) => {
            state.checkOrder.isFetching = true;
            state.checkOrder.currentOrder = null;
            state.checkOrder.error = false;
        },
        checkOrderSuccess: (state, action) => {
            state.checkOrder.isFetching = false;
            state.checkOrder.currentOrder = action.payload;
            state.checkOrder.error = false;
        },
        checkOrderFailed: (state) => {
            state.checkOrder.isFetching = false;
            state.checkOrder.currentOrder = null;
            state.checkOrder.error = true;
        },
        getOrderByUserIdStart: (state) => {
            state.getOrderByUserId.isFetching = true;
            state.getOrderByUserId.currentOrder = null;
            state.getOrderByUserId.error = false;
        },
        getOrderByUserIdSuccess: (state, action) => {
            state.getOrderByUserId.isFetching = false;
            state.getOrderByUserId.currentOrder = action.payload;
            state.getOrderByUserId.error = false;
        },
        getOrderByUserIdFailed: (state) => {
            state.getOrderByUserId.isFetching = false;
            state.getOrderByUserId.currentOrder = null;
            state.getOrderByUserId.error = true;
        },

    }
})
export const { addOrderStart, addOrderSuccess, addOrderFailed,
    getOrderStart, getOrderSuccess, getOrderFailed,
    getOrderDetailsFailed, getOrderDetailsStart, getOrderDetailsSuccess,
    checkOrderFailed, checkOrderStart, checkOrderSuccess,
    getOrderByUserIdFailed, getOrderByUserIdStart, getOrderByUserIdSuccess


} =
    orderSlice.actions;
export default orderSlice.reducer;