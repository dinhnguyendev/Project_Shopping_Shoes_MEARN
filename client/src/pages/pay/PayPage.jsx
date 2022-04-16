import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkedAddress, getToAddress, getToAddressUser, getToCart, getToPay } from "../../redux/apiRequest";
import { useNavigate } from 'react-router-dom';
import Address from "./components/address/Address";
import Pay from "./components/pay/Pay";
import './payPage.css';
function PayPage() {
    const user = useSelector(state => state.user.login?.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const userid = user._id;
        getToCart(dispatch, userid);
        getToAddress(dispatch, navigate);
        getToAddressUser(dispatch, navigate, userid);

    }, []);
    return (
        <div className="paypage" >
            <div className="paypage__gripd">
                <Address />
                <Pay />

            </div>
        </div>
    );
}

export default PayPage;