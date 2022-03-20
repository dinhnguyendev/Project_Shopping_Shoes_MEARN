import { createSlice } from "@reduxjs/toolkit";
const navbarSlice = createSlice({
    name: "navbar",
    initialState: {
        getnavbar: {
            isFetching: false,
            error: false,
            navbarData: null
        }
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
        }
    }
});
export const { getnavbarFailed, getnavbarStart, getnavbarSuccess } = navbarSlice.actions;
export default navbarSlice.reducer;