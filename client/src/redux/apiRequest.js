import axios from "axios";
import {
    addNmuberCartStart, addNumberCartFailed, addNumberCartSuccess,
    addToCartFailed, addToCartStart, addToCartSuccess,
    deleteCartFailed, deleteCartStart, deleteCartSuccess,
    getToCartFailed, getToCartStart, getToCartSuccess, getToPayFailed, getToPayStart, getToPaySuccess, payCartFailed, payCartStart, payCartSuccess
} from "./cartSlice";
import { getnavbarFailed, getnavbarStart, getnavbarSuccess, getnavbarTrademarkDetailsFailed, getnavbarTrademarkDetailsStart, getnavbarTrademarkDetailsSuccess, getnavbarTrademarkFailed, getnavbarTrademarkStart, getnavbarTrademarkSuccess } from "./navbarSlice";
import { addOrderFailed, addOrderStart, addOrderSuccess, getOrderFailed, getOrderStart, getOrderSuccess } from "./orderSlice";
import {
    activeAddressFailed,
    activeAddressStart,
    activeAddressSuccess,
    addressSubmitFailed,
    addressSubmitStart,
    addressSubmitSuccess,
    checkedAddressFailed,
    checkedAddressStart,
    checkedAddressSuccess,
    deleteAddressFailed,
    deleteAddressStart,
    deleteAddressSuccess,
    getToAddressCityFailed, getToAddressCityStart, getToAddressCitySuccess,
    getToAddressFailed, getToAddressStart, getToAddressSuccess, getToAddressUserFailed, getToAddressUserStart, getToAddressUserSuccess, getToAddressWarsFailed,
    getToAddressWarsStart, getToAddressWarsSuccess,
}
    from "./paySlice";
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
export const addproducts = async (dispatch, navigate, formData, config) => {
    dispatch(addproductsStart());
    try {
        const res = await axios.post(`http://localhost:5000/products/add`,
            formData, config);
        // const ress = await axios.post(`http://localhost:5000/products/add`,
        //     dataSubmit, configJson);
        dispatch(addproductsSuccess(res.data));
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
export const getnavbarTrademark = async (dispatch, navigate) => {
    dispatch(getnavbarTrademarkStart());
    try {
        const res = await axios.get(`http://localhost:5000/navbar/trademark`);
        dispatch(getnavbarTrademarkSuccess(res.data));
    } catch (error) {
        dispatch(getnavbarTrademarkFailed());
    }
}
export const getnavbarTrademarkDetails = async (dispatch, navigate, idtrademark) => {
    dispatch(getnavbarTrademarkDetailsStart());
    try {
        const res = await axios.get(`http://localhost:5000/navbar/trademarkdetails/${idtrademark}`);
        dispatch(getnavbarTrademarkDetailsSuccess(res.data));
    } catch (error) {
        dispatch(getnavbarTrademarkDetailsFailed());
    }
}
export const postToCart = async (dispatch, navigate, postAdd) => {
    dispatch(addToCartStart());
    try {
        const res = await axios.post('http://localhost:5000/cart/add', postAdd);
        dispatch(addToCartSuccess());
        navigate("/cart");
    } catch {
        dispatch(addToCartFailed());
    }
}
export const postToCart1 = async (dispatch, postAdd) => {
    dispatch(addToCartStart());
    try {
        const res = await axios.post('http://localhost:5000/cart/add', postAdd);
        dispatch(addToCartSuccess());
    } catch {
        dispatch(addToCartFailed());
    }
}
export const getToCart = async (dispatch, userid) => {
    dispatch(getToCartStart());
    try {
        const res = await axios.get(`http://localhost:5000/cart/${userid}/all`);
        dispatch(getToCartSuccess(res.data));
    } catch (error) {
        dispatch(getToCartFailed());
    }
}
export const addNumberCart = async (dispatch, userid, index, numbers) => {
    dispatch(addNmuberCartStart());
    try {
        const res = await axios.post('http://localhost:5000/cart/updatenumbercart',
            { userid, index, numbers });
        dispatch(addNumberCartSuccess(res.data))
    } catch (error) {
        dispatch(addNumberCartFailed());
    }
}
export const deleteCart = async (dispatch, userid, productid) => {
    dispatch(deleteCartStart());
    try {
        const res = await axios.post('http://localhost:5000/cart/delete', {
            userid, productid
        });
        dispatch(deleteCartSuccess());
    } catch (error) {
        dispatch(deleteCartFailed());
    }
}
export const checkeds = async (dispatch, navigate, index, userid) => {
    dispatch(payCartStart());
    try {
        const res = await axios.post('http://localhost:5000/cart/checked', {
            index, userid
        })
        dispatch(payCartSuccess(res.data));
    } catch (error) {
        dispatch(payCartFailed());
    }
}
export const uncheckeds = async (dispatch, navigate, index, userid) => {
    dispatch(payCartStart());
    try {
        const res = await axios.post('http://localhost:5000/cart/unchecked', {
            index, userid
        })
        dispatch(payCartSuccess(res.data));
    } catch (error) {
        dispatch(payCartFailed());
    }
}
export const setDefaultChecked = async (dispatch, navigate, userid) => {
    dispatch(payCartStart());
    try {
        const res = await axios.post('http://localhost:5000/cart/setchecked', {
            userid
        })
        dispatch(payCartSuccess(res.data));
    } catch (error) {
        dispatch(payCartFailed());
    }
}
export const getToPay = async (dispath, userid) => {
    dispath(getToPayStart());
    try {
        const res = await axios.post('http://localhost:5000/cart/getpay', { userid });
        dispath(getToPaySuccess(res.data));
    } catch (error) {
        dispath(getToPayFailed());
    }
}
export const getToAddress = async (dispath, navigate) => {
    dispath(getToAddressStart());
    try {
        const res = await axios.get('https://provinces.open-api.vn/api/p/');
        dispath(getToAddressSuccess(res.data));
    } catch (error) {
        dispath(getToAddressFailed());
    }
}
export const getToAddressCity = async (dispath, navigate, code) => {
    dispath(getToAddressCityStart());
    try {
        const res = await axios.get(`https://provinces.open-api.vn/api/p/${code}?depth=2`);
        dispath(getToAddressCitySuccess(res.data));
    } catch (error) {
        dispath(getToAddressCityFailed());
    }
}
export const getToAddressCityEmpty = async (dispath, navigate) => {
    dispath(getToAddressCityStart());
    try {
        dispath(getToAddressCitySuccess([]));
    } catch (error) {
        dispath(getToAddressCityFailed());
    }
}
export const getToAddressWars = async (dispath, navigate, code) => {
    dispath(getToAddressWarsStart());
    try {
        const res = await axios.get(`https://provinces.open-api.vn/api/d/${code}?depth=2`);
        dispath(getToAddressWarsSuccess(res.data));
    } catch (error) {
        dispath(getToAddressWarsFailed());
    }
}
export const getToAddressWarsEmpty = async (dispath, navigate) => {
    dispath(getToAddressWarsStart());
    try {
        dispath(getToAddressWarsSuccess([]));
    } catch (error) {
        dispath(getToAddressWarsFailed());
    }
}
export const addAddress = async (dispath, navigate, address) => {
    dispath(addressSubmitStart());
    try {
        const res = await axios.post("http://localhost:5000/user/address/add", {
            address
        })
        dispath(addressSubmitSuccess(res.data));
    } catch (error) {
        dispath(addressSubmitFailed());
    }
}
export const getToAddressUser = async (dispatch, navigate, userid) => {
    dispatch(getToAddressUserStart());
    try {
        const res = await axios.get(`http://localhost:5000/user/address/${userid}/all`);
        dispatch(getToAddressUserSuccess(res.data));
    } catch (error) {
        dispatch(getToAddressUserFailed());
    }
}
export const deleteAddress = async (dispatch, navigate, userid, idAddress) => {
    dispatch(deleteAddressStart());
    try {
        const res = await axios.post("http://localhost:5000/user/address/delete", {
            userid, idAddress
        });
        dispatch(deleteAddressSuccess(res.data));
    } catch (error) {
        dispatch(deleteAddressFailed());
    }
}
export const activeAddress = async (dispatch, navigate, userid, idAddress) => {
    dispatch(activeAddressStart());
    try {
        const res = await axios.post("http://localhost:5000/user/address/checked", {
            userid, idAddress
        });
        dispatch(activeAddressSuccess(res.data));
    } catch (error) {
        dispatch(activeAddressFailed());
    }
}
export const unactiveAddress = async (dispatch, navigate, userid) => {
    dispatch(activeAddressStart());
    try {
        const res = await axios.post("http://localhost:5000/user/address/unchecked", {
            userid
        });
        dispatch(activeAddressSuccess(res.data));
    } catch (error) {
        dispatch(activeAddressFailed());
    }
}
export const checkedAddress = async (dispatch, navigate, userid) => {
    dispatch(checkedAddressStart());
    try {
        const res = await axios.post("http://localhost:5000/user/address/getchecked", {
            userid
        });
        dispatch(checkedAddressSuccess(res.data));
    } catch (error) {
        dispatch(checkedAddressFailed());
    }
}
export const addOrder = async (dispatch, navigate, userid, arr, addressOrder, total) => {
    dispatch(addOrderStart());
    try {
        const res = await axios.post("http://localhost:5000/order/add", {
            userid, arr, addressOrder, total
        });
        dispatch(addOrderSuccess(res.data));
        navigate("/success");
    } catch (error) {
        dispatch(addOrderFailed());
    }
}
export const getOrder = async (dispatch) => {
    dispatch(getOrderStart());
    try {
        const res = await axios.get("http://localhost:5000/order/all");
        dispatch(getOrderSuccess(res.data));
    } catch (error) {
        dispatch(getOrderFailed());
    }
}

