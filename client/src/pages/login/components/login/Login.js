import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../../redux/apiRequest';
import './login.css';
function Register() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            phone,
            password
        };
        loginUser(user, dispatch, navigate);
    }
    return (
        <div class="register">
            <div class="register__big">
                <div class="register__form">
                    <div class="register__form__content">
                        <div class="register__heading">
                            <div class="register__heading__text">
                                <div class="register__heading__text__big">
                                    Đăng Nhập
                                </div>
                                <div class="register__heading__text__small">
                                    Chào bạn quay lại
                                </div>
                            </div>
                            <div class="register__heading__logo">
                                <img src="https://static.chotot.com/storage/assets/LOGIN/logo_register.png" alt=""
                                    class="register__heading__logo__img" />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} class="register__container">
                            <div class="register__container__item">
                                <input type="text" placeholder="Nhập SĐT của bạn" class="register__input"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}

                                />
                            </div>
                            <div class="register__container__item">
                                <input type="text" placeholder="Nhập mật khẩu"
                                    class="register__input"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div class="register__button">
                                <button class="register__btn register__btn__active">
                                    Đăng Nhập
                                </button>
                            </div>
                        </form>
                        <div class="register__title">
                            Bạn quên mật khẩu
                        </div>
                        <div class="register__or">hoặc sử dụng</div>
                        <div class="register__footer">
                            <ul class="register__list">
                                <li class="register__list__item">
                                    <img class="register__list__image"
                                        src="https://static.chotot.com/storage/assets/LOGIN/facebook.svg" alt="" />
                                </li>
                                <li class="register__list__item">
                                    <img class="register__list__image"
                                        src="https://static.chotot.com/storage/assets/LOGIN/google.svg" alt="" />
                                </li>
                                <li class="register__list__item">
                                    <img class="register__list__image"
                                        src="https://static.chotot.com/storage/assets/LOGIN/apple.svg" alt="" />
                                </li>
                            </ul>
                        </div>
                        <div class="register__login">
                            <div class="register__login__item">Bạn chưa có tài khoản?</div>
                            <Link to="/register" class="register__login__link"> Đăng ký ngay</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Register;