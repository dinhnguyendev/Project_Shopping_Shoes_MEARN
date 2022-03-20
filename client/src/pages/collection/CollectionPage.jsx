import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import './collectionPage.css';
import Navbar from '../../components/navbar/Navbar';
import Collection from './components/collection/Collection';
import { getnavbar, getnavbarcategory, getproducts } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';

function Collections() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { slug } = useParams();
    console.log("slug:" + slug)
    useEffect(() => {
        getproducts(dispatch, navigate, slug);

    }, []);

    return (
        <div className='collection__page'>
            <div className='collection__page__gripd'>
                <div className='collection__page__navbar'>
                    <Navbar />
                </div>
                <div className='collection__page__container'>
                    <Collection />
                </div>
            </div>
        </div>
    );
}

export default Collections;