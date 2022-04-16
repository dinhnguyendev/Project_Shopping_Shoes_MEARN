import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getOrder } from '../../../../redux/apiRequest';
import Navbar from './components/navbarorder/Navbar';
import Order from './components/order/Order';
import OrderDetails from './components/orderdetails/OrderDetails';

function OrderPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        getOrder(dispatch);
    }, [])
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default OrderPage;