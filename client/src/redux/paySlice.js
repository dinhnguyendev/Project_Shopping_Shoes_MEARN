import { createSlice } from "@reduxjs/toolkit";

const paySlice = createSlice({
    name: "pay",
    initialState: {
        getToAddress: {
            isFetching: false,
            error: false,
            currentAddress: []
        },
        getToAddressCity: {
            isFetching: false,
            error: false,
            currentAddressCity: []
        },
        getToAddressWars: {
            isFetching: false,
            error: false,
            currentAddressWars: []
        },
        addressSubmit: {
            isFetching: false,
            error: false,
            currentAddress: null
        },
        getToAddressUser: {
            isFetching: false,
            error: false,
            currentAddress: null
        },
        deleteAddress: {
            isFetching: false,
            error: false,
            currentAddress: null
        },
        orderAddress: {
            isFetching: false,
            error: false,
            currentAddress: null
        }
    },
    reducers: {
        getToAddressStart: (state) => {
            state.getToAddress.isFetching = true;
            state.getToAddress.currentAddress = [];
            state.getToAddress.error = false;
        },
        getToAddressSuccess: (state, action) => {
            state.getToAddress.isFetching = false;
            state.getToAddress.currentAddress = action.payload;
            state.getToAddress.error = false;
        },
        getToAddressFailed: (state) => {
            state.getToAddress.isFetching = false;
            state.getToAddress.currentAddress = [];
            state.getToAddress.error = true;
        },
        getToAddressCityStart: (state) => {
            state.getToAddressCity.isFetching = true;
            state.getToAddressCity.currentAddressCity = [];
            state.getToAddressCity.error = false;
        },
        getToAddressCitySuccess: (state, action) => {
            state.getToAddressCity.isFetching = false;
            state.getToAddressCity.currentAddressCity = action.payload;
            state.getToAddressCity.error = false;
        },
        getToAddressCityFailed: (state) => {
            state.getToAddressCity.isFetching = false;
            state.getToAddressCity.currentAddressCity = [];
            state.getToAddressCity.error = true;
        },
        getToAddressWarsStart: (state) => {
            state.getToAddressWars.isFetching = true;
            state.getToAddressWars.currentAddressWars = [];
            state.getToAddressWars.error = false;
        },
        getToAddressWarsSuccess: (state, action) => {
            state.getToAddressWars.isFetching = false;
            state.getToAddressWars.currentAddressWars = action.payload;
            state.getToAddressWars.error = false;
        },
        getToAddressWarsFailed: (state) => {
            state.getToAddressWars.isFetching = false;
            state.getToAddressWars.currentAddressWars = [];
            state.getToAddressWars.error = true;
        },
        addressSubmitStart: (state) => {
            state.addressSubmit.isFetching = true;
            state.addressSubmit.currentAddressWars = null;
            state.addressSubmit.error = false;
        },
        addressSubmitSuccess: (state, action) => {
            state.addressSubmit.isFetching = false;
            state.addressSubmit.currentAddressWars = action.payload;
            state.addressSubmit.error = false;
        },
        addressSubmitFailed: (state) => {
            state.addressSubmit.isFetching = false;
            state.addressSubmit.currentAddressWars = null;
            state.addressSubmit.error = true;
        },
        getToAddressUserStart: (state) => {
            state.getToAddressUser.isFetching = true;
            state.getToAddressUser.currentAddress = null;
            state.getToAddressUser.error = false;
        },
        getToAddressUserSuccess: (state, action) => {
            state.getToAddressUser.isFetching = false;
            state.getToAddressUser.currentAddress = action.payload;
            state.getToAddressUser.error = false;
        },
        getToAddressUserFailed: (state) => {
            state.getToAddressUser.isFetching = false;
            state.getToAddressUser.currentAddress = null;
            state.getToAddressUser.error = true;
        },
        deleteAddressStart: (state) => {
            state.deleteAddress.isFetching = true;
            state.deleteAddress.currentAddress = null;
            state.deleteAddress.error = false;
        },
        deleteAddressSuccess: (state, action) => {
            state.deleteAddress.isFetching = false;
            state.deleteAddress.currentAddress = action.payload;
            state.deleteAddress.error = false;
        },
        deleteAddressFailed: (state) => {
            state.deleteAddress.isFetching = false;
            state.deleteAddress.currentAddress = null;
            state.deleteAddress.error = true;
        },
        orderAddressStart: (state) => {
            state.orderAddress.isFetching = true;
            state.orderAddress.currentAddress = null;
            state.orderAddress.error = false;
        },
        orderAddressSuccess: (state, action) => {
            state.orderAddress.isFetching = false;
            state.orderAddress.currentAddress = action.payload;
            state.orderAddress.error = false;
        },
        orderAddressFailed: (state) => {
            state.orderAddress.isFetching = false;
            state.orderAddress.currentAddress = null;
            state.orderAddress.error = true;
        },
    }
})
export const { getToAddressStart, getToAddressFailed, getToAddressSuccess,
    getToAddressCityFailed, getToAddressCitySuccess, getToAddressCityStart,
    getToAddressWarsFailed, getToAddressWarsSuccess, getToAddressWarsStart,
    addressSubmitFailed, addressSubmitStart, addressSubmitSuccess,
    getToAddressUserFailed, getToAddressUserStart, getToAddressUserSuccess,
    deleteAddressFailed, deleteAddressSuccess, deleteAddressStart,
    orderAddressFailed, orderAddressSuccess, orderAddressStart
}
    = paySlice.actions;
export default paySlice.reducer;