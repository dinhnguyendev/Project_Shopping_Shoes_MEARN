import React from 'react';
import Navbar from './components/navbarorder/Navbar';
import Order from './components/order/Order';
import OrderDetails from './components/orderdetails/OrderDetails';

function OrderPage() {
    return (
        <div>
            <Navbar />
            <OrderDetails />
            {/* <Order /> */}
        </div>
    );
}

export default OrderPage;