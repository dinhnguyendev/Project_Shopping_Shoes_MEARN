import React from 'react';
import { Outlet } from 'react-router-dom';
import './adminpage.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import OrderPage from './components/order/OrderPage';
function AdminPage() {
    return (
        <div>
            <Header />
            <div className='admin' >
                <Navbar />
                <div className='content'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
export default AdminPage;