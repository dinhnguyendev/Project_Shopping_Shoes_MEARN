import { createSlice } from "@reduxjs/toolkit";
const navbarSlice = createSlice({
    name: "navbar",
    initialState: {
        getnavbar: {
            isFetching: false,
            error: false,
            navbarData: null
        },
        getnavbarTrademark: {
            isFetching: false,
            error: false,
            navbarData: null
        },
        getnavbarTrademarkDetails: {
            isFetching: false,
            error: false,
            navbarData: null
        },
    },
    reducers: {
        getnavbarStart: (state) => {
            state.getnavbar.isFetching = true;
            state.getnavbar.error = false;
            state.getnavbar.navbarData = null;
        },
        getnavbarSuccess: (state, action) => {
            state.getnavbar.isFetching = false;
            state.getnavbar.error = false;
            state.getnavbar.navbarData = action.payload;
        },
        getnavbarFailed: (state) => {
            state.getnavbar.isFetching = false;
            state.getnavbar.error = true;
            state.getnavbar.navbarData = null;
        },
        getnavbarTrademarkStart: (state) => {
            state.getnavbarTrademark.isFetching = true;
            state.getnavbarTrademark.error = false;
            state.getnavbarTrademark.navbarData = null;
        },
        getnavbarTrademarkSuccess: (state, action) => {
            state.getnavbarTrademark.isFetching = false;
            state.getnavbarTrademark.error = false;
            state.getnavbarTrademark.navbarData = action.payload;
        },
        getnavbarTrademarkFailed: (state) => {
            state.getnavbarTrademark.isFetching = false;
            state.getnavbarTrademark.error = true;
            state.getnavbarTrademark.navbarData = null;
        },
        getnavbarTrademarkDetailsStart: (state) => {
            state.getnavbarTrademarkDetails.isFetching = true;
            state.getnavbarTrademarkDetails.error = false;
            state.getnavbarTrademarkDetails.navbarData = null;
        },
        getnavbarTrademarkDetailsSuccess: (state, action) => {
            state.getnavbarTrademarkDetails.isFetching = false;
            state.getnavbarTrademarkDetails.error = false;
            state.getnavbarTrademarkDetails.navbarData = action.payload;
        },
        getnavbarTrademarkDetailsFailed: (state) => {
            state.getnavbarTrademarkDetails.isFetching = false;
            state.getnavbarTrademarkDetails.error = true;
            state.getnavbarTrademarkDetails.navbarData = null;
        },
    }
});
export const { getnavbarFailed, getnavbarStart, getnavbarSuccess,
    getnavbarTrademarkFailed, getnavbarTrademarkStart, getnavbarTrademarkSuccess,
    getnavbarTrademarkDetailsFailed, getnavbarTrademarkDetailsStart, getnavbarTrademarkDetailsSuccess
} = navbarSlice.actions;
export default navbarSlice.reducer;