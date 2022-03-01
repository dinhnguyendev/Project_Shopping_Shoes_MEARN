import React from 'react';
import './adminpage.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
function AdminPage() {
    return (
        <div>
            <div className='admin' >
                <Header />
                <Navbar />
                <div className='content'>

                </div>
            </div>
        </div>
    );
}
export default AdminPage;