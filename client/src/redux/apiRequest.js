import axios from "axios";
import { getnavbarFailed, getnavbarStart, getnavbarSuccess } from "./navbarSlice";
import {
    getdetailsSuccsess, getdetailsFailed, getdetailsStart,
    getproductFailed, getproductStart, getproductSuccsess,
    addproductsStart,
    addproductsSuccess,
    addproductsFailed
}
    from "./productSlice";
import {
    loginFailed,
    loginStart,
    loginSuccess,
    logoutFailed,
    logoutStart,
    logoutSuccess,
    registerFailed,
    registerStart,
    registerSuccess
} from "./userSlice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const respon = await axios.post('http://localhost:5000/user/login', user);
        dispatch(loginSuccess(respon.data));
        navigate("/")
    } catch (error) {
        dispatch(loginFailed());
    }
}
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post('http://localhost:5000/user/register', user);
        dispatch(registerSuccess());
        navigate("/login");
    } catch (error) {
        dispatch(registerFailed());
    }
}
export const logout = async (dispatch, id, navigate, tokens, axiosJWT) => {
    dispatch(logoutStart());
    try {
        await axios.post("http://localhost:5000/user/logout", {
            headers: {
                token: `Bearer ${tokens}`
            }
        });
        dispatch(logoutSuccess());
        navigate("/login");
    } catch (error) {
        dispatch(logoutFailed());
    }
}

export const getproducts = async (dispatch, navigate, slug) => {
    dispatch(getproductStart());
    try {
        const res = await axios.get(`http://localhost:5000/collection/${slug}`);
        dispatch(getproductSuccsess(res.data));
    } catch (error) {
        dispatch(getproductFailed());
    }
}
export const getdetailsproducts = async (dispatch, slug, navigate) => {
    dispatch(getdetailsStart());
    try {
        const res = await axios.get(`http://localhost:5000/products/${slug}`);
        dispatch(getdetailsSuccsess(res.data));
    } catch (error) {
        dispatch(getdetailsFailed());
    }
}
export const addproducts = async (dispatch, navigate) => {
    dispatch(addproductsStart());
    try {
        const res = await axios.post(`http://localhost:5000/products/add`);
        dispatch(addproductsSuccess());
    } catch (error) {
        dispatch(addproductsFailed());
    }
}
export const getnavbarcategory = async (dispatch, navigate) => {
    dispatch(getnavbarStart());
    try {
        const res = await axios.get(`http://localhost:5000/navbar/category`);
        dispatch(getnavbarSuccess(res.data));
    } catch (error) {
        dispatch(getnavbarFailed());
    }
}