import React from 'react';
import './adminpage.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import AddProduct from './components/order/components/addproduct/AddProduct';
import OrderPage from './components/order/OrderPage';
function AdminPage() {
    return (
        <div>
            <Header />
            <div className='admin' >
                <Navbar />
                <div className='content'>
                    <AddProduct />
                </div>
            </div>
        </div>
    );
}
export default AdminPage;