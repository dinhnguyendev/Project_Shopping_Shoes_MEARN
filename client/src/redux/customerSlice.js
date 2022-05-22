import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        getCustomer: {
            isFetching: false,
            currentCustomer: null,
            error: false
        },
    },
    reducers: {
        getCustomerStart: (state) => {
            state.getCustomer.isFetching = true;
            state.getCustomer.currentCustomer = null;
            state.getCustomer.error = false;
        },
        getCustomerSuccess: (state, action) => {
            state.getCustomer.isFetching = false;
            state.getCustomer.currentCustomer = action.payload;
            state.getCustomer.error = false;
        },
        getCustomerFailed: (state) => {
            state.getCustomer.isFetching = false;
            state.getCustomer.currentCustomer = null;
            state.getCustomer.error = true;
        },
    }
})
export const {
    getCustomerFailed, getCustomerStart, getCustomerSuccess
} = customerSlice.actions;
export default customerSlice.reducer;