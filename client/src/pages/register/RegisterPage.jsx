import React from 'react';
import Register from './components/register/Register';
import './registerPage.css';

function RegisterPage(props) {
    return (
        <div className='register__page'>
            <Register />
        </div>
    );
}

export default RegisterPage;