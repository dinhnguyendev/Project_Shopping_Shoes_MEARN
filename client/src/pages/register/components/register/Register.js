import { useState } from 'react';
import './register.css';
import { registerUser } from '../../../../redux/apiRequest';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Register() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const user = {
            phone,
            name,
            password
        }
        registerUser(user, dispatch, navigate);

    }

    return (
        <div class="register">
            <div class="register__big">
                <div class="register__form">
                    <div class="register__form__content">
                        <div class="register__heading">
                            <div class="register__heading__text">
                                <div class="register__heading__text__big">
                                    Đăng ký
                                </div>
                                <div class="register__heading__text__small">
                                    Tạo tài khoản PAN ngay
                                </div>
                            </div>
                            <div class="register__heading__logo">
                                <img src="https://static.chotot.com/storage/assets/LOGIN/logo_register.png" alt=""
                                    class="register__heading__logo__img" />
                            </div>
                        </div>
                        <form onSubmit={handleRegister} class="register__container">
                            <div class="register__container__item">
                                <input type="text" placeholder="Nhập số điện thoại của bạn" class="register__input"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </div>
                            <div class="register__container__item">
                                <input type="text" placeholder="Nhập tên của bạn" class="register__input"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div class="register__container__item">
                                <input type="text" placeholder="Tạo một mật khẩu có ít nhất 5 ký tự"
                                    class="register__input"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div class="register__container__item">
                                <input type="text" placeholder="Nhập lại mật khẩu"
                                    class="register__input"
                                    value={repassword}
                                    onChange={e => setRepassword(e.target.value)}
                                />
                            </div>
                            <div class="register__button">
                                <button class="register__btn register__btn__active">
                                    Đăng ký
                                </button>
                            </div>
                        </form>
                        <div class="register__title">
                            Bằng việc Đăng ký, bạn đã đồng ý với Điều khoản sử dụng của PAN
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
                            <div class="register__login__item">Bạn đã có tài khoản?</div>
                            <a href="" class="register__login__link"> Đăng nhập</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Register;