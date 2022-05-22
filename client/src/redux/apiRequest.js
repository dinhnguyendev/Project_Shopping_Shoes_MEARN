import axios from "axios";
import {
    addNmuberCartStart, addNumberCartFailed, addNumberCartSuccess,
    addToCartFailed, addToCartStart, addToCartSuccess,
    deleteCartFailed, deleteCartStart, deleteCartSuccess,
    getToCartFailed, getToCartStart, getToCartSuccess, getToPayFailed, getToPayStart, getToPaySuccess, payCartFailed, payCartStart, payCartSuccess
} from "./cartSlice";
import { getCustomerFailed, getCustomerStart, getCustomerSuccess } from "./customerSlice";
import { getnavbarFailed, getnavbarStart, getnavbarSuccess, getnavbarTrademarkDetailsFailed, getnavbarTrademarkDetailsStart, getnavbarTrademarkDetailsSuccess, getnavbarTrademarkFailed, getnavbarTrademarkStart, getnavbarTrademarkSuccess } from "./navbarSlice";
import { addOrderFailed, addOrderStart, addOrderSuccess, checkOrderFailed, checkOrderStart, checkOrderSuccess, getOrderByUserIdFailed, getOrderByUserIdStart, getOrderByUserIdSuccess, getOrderDetailsFailed, getOrderDetailsStart, getOrderDetailsSuccess, getOrderFailed, getOrderStart, getOrderSuccess } from "./orderSlice";
import {
    addressSubmitFailed,
    addressSubmitStart,
    addressSubmitSuccess,
    deleteAddressFailed,
    deleteAddressStart,
    deleteAddressSuccess,
    getToAddressCityFailed, getToAddressCityStart, getToAddressCitySuccess,
    getToAddressFailed, getToAddressStart, getToAddressSuccess, getToAddressUserFailed, getToAddressUserStart, getToAddressUserSuccess, getToAddressWarsFailed,
    getToAddressWarsStart, getToAddressWarsSuccess, orderAddressFailed, orderAddressStart, orderAddressSuccess,
}
    from "./paySlice";
import {
    getdetailsSuccsess, getdetailsFailed, getdetailsStart,
    getproductFailed, getproductStart, getproductSuccsess,
    addproductsStart,
    addproductsSuccess,
    addproductsFailed,
    fixproductsStart,
    fixproductsSuccess,
    fixproductsFailed,
    fixproductsAllStart,
    fixproductsAllSuccess,
    fixproductsAllFailed,
    colorStart,
    colorSuccess,
    colorFailed,
    sizeStart,
    sizeSuccess,
    sizeFailed,
    adddetailsStart,
    adddetailsSuccess,
    adddetailsFailed,
    deletedetailsStart,
    deletedetailsSuccess,
    deletedetailsFailed
}
    from "./productSlice";
import {
    getInfCustomerFailed,
    getInfCustomerStart,
    getInfCustomerSuccess,
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
export const logout = async (dispatch, navigate, tokens) => {
    dispatch(logoutStart());
    try {
        await axios.post("http://localhost:5000/user/logout", { datas: "hello" }, {
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
export const getproductsBySearch = async (dispatch, navigate, name) => {
    dispatch(getproductStart());
    try {
        const res = await axios.get(`http://localhost:5000/products/search/${name}`);
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
export const orderAdress = async (dispatch, idAddress) => {
    dispatch(orderAddressStart());
    try {
        dispatch(orderAddressSuccess(idAddress));
    } catch (error) {
        dispatch(orderAddressFailed());
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
export const getOrderDetails = async (dispatch, id) => {
    dispatch(getOrderDetailsStart());
    try {
        const res = await axios.get(`http://localhost:5000/order/${id}/details`);
        dispatch(getOrderDetailsSuccess(res.data));
    } catch (error) {
        dispatch(getOrderDetailsFailed());
    }
}
export const getProductFix = async (dispatch, slug) => {
    dispatch(fixproductsStart());
    try {
        const res = await axios.get(`http://localhost:5000/products/fix/${slug}`);
        dispatch(fixproductsSuccess(res.data));
    } catch (error) {
        dispatch(fixproductsFailed());
    }
}
export const FixProductAll = async (dispatch, formData, config) => {
    dispatch(fixproductsAllStart());
    try {
        const res = await axios.post('http://localhost:5000/products/fix/all', formData, config);
        dispatch(fixproductsAllSuccess(res.data));
    } catch (error) {
        dispatch(fixproductsAllFailed());
    }
}
export const FixProductNoImage = async (dispatch, formData, config) => {
    dispatch(fixproductsAllStart());
    try {
        const res = await axios.post('http://localhost:5000/products/fix/noimage', formData, config);
        dispatch(fixproductsAllSuccess(res.data));
    } catch (error) {
        dispatch(fixproductsAllFailed());
    }
}
export const FixProductImage = async (dispatch, formData, config) => {
    dispatch(fixproductsAllStart());
    try {
        const res = await axios.post('http://localhost:5000/products/fix/image', formData, config);
        dispatch(fixproductsAllSuccess(res.data));
    } catch (error) {
        dispatch(fixproductsAllFailed());
    }
}
export const FixProductImageDetails = async (dispatch, formData, config) => {
    dispatch(fixproductsAllStart());
    try {
        const res = await axios.post('http://localhost:5000/products/fix/imagedetails', formData, config);
        dispatch(fixproductsAllSuccess(res.data));
    } catch (error) {
        dispatch(fixproductsAllFailed());
    }
}
export const getColor = async (dispatch) => {
    dispatch(colorStart());
    try {
        const res = await axios.get('http://localhost:5000/color/all');
        dispatch(colorSuccess(res.data));
    } catch (error) {
        dispatch(colorFailed());
    }
}
export const getSize = async (dispatch) => {
    dispatch(sizeStart());
    try {
        const res = await axios.get('http://localhost:5000/size/all');
        dispatch(sizeSuccess(res.data));
    } catch (error) {
        dispatch(sizeFailed());
    }
}
export const addProductDetails = async (dispatch, dataSubmit) => {
    dispatch(adddetailsStart());
    try {
        const res = await axios.post('http://localhost:5000/products/adddetails', { dataSubmit });
        dispatch(adddetailsSuccess(res.data));
    } catch (error) {
        dispatch(adddetailsFailed());
    }
}
export const deleteProductDetails = async (dispatch, slug, iddetails, number) => {
    dispatch(deletedetailsStart());
    try {
        const res = await axios.post('http://localhost:5000/products/deletedetails', { slug, iddetails, number });
        dispatch(deletedetailsSuccess(res.data));
    } catch (error) {
        dispatch(deletedetailsFailed());
    }
}
export const deleteProduct = async (dispatch, slug) => {
    const res = await axios.post('http://localhost:5000/products/delete', { slug });

}
export const checkOrder = async (dispatch, id, color, size) => {
    await axios.post('http://localhost:5000/order/check', { id, color, size });
    // dispatch(checkOrderStart());
    // try {
    //     dispatch(checkOrderSuccess(res.data));
    // } catch (error) {
    //     dispatch(checkOrderFailed());
    // }

}
// export const checkDeleteProduct = async (id) => {
//     await axios.post('http://localhost:5000/order/checkdelete', { id })

// }
// export const getorderAddress = async (userid, idaddress) => {
//     await axios.get(`http://localhost:5000/user/address/${userid}/${idaddress}`)
//     .then(data=> return )
// }
export const updateOrderPickup = async (id) => {
    await axios.post('http://localhost:5000/order/updatepickup', { id });
}
export const updateOrderDeliver = async (id) => {
    await axios.post('http://localhost:5000/order/updatedeliver', { id });
}
export const getInfomationCutomer = async (dispatch, userid) => {
    dispatch(getCustomerStart());
    try {
        const res = await axios.get(`http://localhost:5000/user/getinfomation/${userid}`);
        dispatch(getCustomerSuccess(res.data));
    } catch (error) {
        dispatch(getCustomerFailed());
    }
}
export const updateInfCustomer = async (userid, name, gender, name_shop, email) => {
    await axios.post('http://localhost:5000/user/updateinfomation/noimage', { userid, name, gender, name_shop, email })
}
export const getOrderByUserId = async (dispatch, userid) => {
    dispatch(getOrderByUserIdStart());
    try {
        const res = await axios.get(`http://localhost:5000/order/${userid}/all`)
        dispatch(getOrderByUserIdSuccess(res.data))
    } catch (error) {
        dispatch(getOrderByUserIdFailed());
    }
}

export const deleteOrderById = async (id) => {
    await axios.post('http://localhost:5000/order/deleteorder/', { id })
}


