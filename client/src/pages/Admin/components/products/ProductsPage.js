import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { getnavbarcategory, getnavbarTrademark } from '../../../../redux/apiRequest';

function ProductsPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        getnavbarcategory(dispatch, navigate);
        getnavbarTrademark(dispatch, navigate);
    }, [])
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default ProductsPage;