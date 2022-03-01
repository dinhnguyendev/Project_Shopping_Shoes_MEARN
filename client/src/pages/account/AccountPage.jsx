import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from 'react-router-dom';
import { matchPath } from 'react-router-dom';
import NavbarAccount from "./components/navbarAccount/NavbarAccount";
import Purchase from "./components/purchase/Purchase";
import Profile from "./components/profile/Profile";
import './accountPage.css';

function AccountPage() {
    return (
        <div className="account__page">
            <div className='account__page__flex'>
                <NavbarAccount />
                <div className='account__page__content'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AccountPage;