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
    }
})
export const { addOrderStart, addOrderSuccess, addOrderFailed,
    getOrderStart, getOrderSuccess, getOrderFailed

} =
    orderSlice.actions;
export default orderSlice.reducer;