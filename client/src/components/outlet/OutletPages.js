import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from 'react-router-dom';
import { matchPath } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../../pages/home/HomePage';
import Footer from '../footer/Footer';
function OutletPages() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default OutletPages;