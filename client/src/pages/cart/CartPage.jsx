import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToCart } from "../../redux/apiRequest";

import Cart from "./components/cart/Cart";

function CartPage() {
    const user = useSelector(state => state.user.login?.currentUser);
    // console.log(user);
    const dispatch = useDispatch();
    useEffect(() => {
        const userid = user._id;
        getToCart(dispatch, userid);
    }, []);
    return (
        <div>
            <Cart />
        </div>
    );
}

export default CartPage;