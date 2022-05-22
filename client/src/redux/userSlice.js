import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false
        },
        register: {
            currentUser: null,
            isFetching: false,
            error: false
        },
        getInfCustomer: {
            isFetching: false,
            currentUser: null,
            error: false
        }

    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.error = true;
            state.login.isFetching = false;
        },
        registerStart: (state) => {
            state.register.isFetching = true
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.currentUser = true;
            state.register.error = false;
        },
        registerFailed: (state) => {
            state.register.error = true;
            state.register.isFetching = false;
        },
        logoutStart: (state) => {
            state.login.isFetching = true
        },
        logoutSuccess: (state) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.error = false;
        },
        logoutFailed: (state) => {
            state.login.error = true;
            state.login.isFetching = false;
        },
        getInfCustomerStart: (state) => {
            state.getInfCustomer.error = false;
            state.getInfCustomer.isFetching = true;
            state.getInfCustomer.currentUser = null;
        },
        getInfCustomerSuccess: (state, action) => {
            state.getInfCustomer.isFetching = false;
            state.getInfCustomer.currentUser = action.payload;
            state.getInfCustomer.error = false;
        },
        getInfCustomerFailed: (state) => {
            state.getInfCustomer.error = true;
            state.getInfCustomer.isFetching = false;
            state.getInfCustomer.currentUser = null;
        },

    }
});
export const {
    loginFailed,
    loginStart,
    loginSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
    logoutFailed,
    logoutStart,
    logoutSuccess,
    getInfCustomerFailed, getInfCustomerStart, getInfCustomerSuccess
} = userSlice.actions;
export default userSlice.reducer;