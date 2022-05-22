import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToCart } from "../../redux/apiRequest";

import Cart from "./components/cart/Cart";

function CartPage() {
    const user = useSelector(state => state.user.login?.currentUser);
    // console.log(user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (user == null) {
            return navigate("/login");
            // window.location.href = 'http://localhost:3000/login'
            // dispatch(navigate("/login"))
        }

    }, [user]);
    useEffect(() => {
        const userid = user?._id;
        getToCart(dispatch, userid);
    }, []);
    return (
        <div>
            <Cart />
        </div>
    );
}

export default CartPage;