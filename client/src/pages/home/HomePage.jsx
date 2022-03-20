import React from 'react';
import './homePage.css';
import Position from './components/position/Position';
import Slider from './components/slider/Slider';
import SearchIndex from './components/searchIndex/SearchIndex';
import Trademark from './components/trademark/Trademark';
import Trending from './components/trending/Trending';
import Adversiment from './components/adversiment/Adversiment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { loginSuccess } from '../../redux/userSlice';
import { refeshAxiosJWT } from '../../refeshAxiosJWT';
import { getnavbarcategory } from '../../redux/apiRequest';

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.login?.currentUser);
    useEffect(() => {
        if (!user) {
            return navigate("/login");
        };
        if (user?.tokensign) {
            console.log(user.tokensign);
        }
    }, [])
    useEffect(() => {
        getnavbarcategory(dispatch, navigate);
    }, []);
    return (
        <div className='home__page'>
            <Slider />
            <SearchIndex />
            <Trademark />
            <Position />
            <Adversiment />
            <Trending />
        </div>
    )
}
export default Home;