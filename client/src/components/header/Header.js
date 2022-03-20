import { FaPinterest } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import './header.css';
import logo from '../../assets/image/sport.svg';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/apiRequest";
import { refeshAxiosJWT } from "../../refeshAxiosJWT";
import { loginSuccess, logoutSuccess } from "../../redux/userSlice";
import axios from "axios";
import jwtDecode from "jwt-decode";
let axiosJWT = axios.create();
function Header() {
    const user = useSelector(state => state.user.login?.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = user?.tokensign;
    console.log('asdasda: ' + token);
    const id = user?._id;
    console.log((user));
    const refeshtoken = async () => {
        try {
            const res = await axios.post("http://localhost:5000/user/refesh", {
                withCredentials: true
            });
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
    axiosJWT.interceptors.request.use(
        async (config) => {

            let date = new Date();
            const decodeToken = jwtDecode(user?.tokensign);
            if (decodeToken.exp < date.getTime() / 1000) {
                const data = await refeshtoken();
                const refeshUser = {
                    ...user,
                    tokensign: refesh.tokensign
                };
                dispatch(loginSuccess(refeshUser));
                config.headers["token"] = "Bearer " + refesh.tokensign;
            };
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    let jwtToken = refeshAxiosJWT(user, dispatch, logoutSuccess);
    const handleLogout = () => {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const tokens = user?.tokensign;
        console.log('asdasda: ' + tokens);
        const id = user?._id;
        logout(dispatch, id, navigate, tokens, axiosJWT);
    }

    return (
        <div>
            <div class="header ">
                <div class="grid-header">
                    <div class="header-navbar">
                        <ul class="header-navbar-list">
                            <li class="header-navbar-list-item">
                                <Link to="/" class="header-navbar-list-link header-navbar-list-link-not-bold">
                                    Trang Chủ
                                </Link>
                            </li>
                            <li class="header-navbar-list-item">
                                <a href="" class="header-navbar-list-link header-navbar-list-link-not-bold">
                                    Giới Thiệu
                                </a>
                            </li>
                        </ul>
                        <ul class="header-navbar-list">
                            <li class="header-navbar-list-notification">
                                <div class="header-navbar-list-notification-flex">
                                    <div class="header-navbar-list-notification-link-hover">
                                        <Link to="/account/notifications/order"
                                            class="header-navbar-list-notification-link">
                                            <div class="header-navbar-list-notification-icon"><i class="fal fa-bells"></i>
                                            </div>
                                            <div class="header-navbar-list-notification-text">Thông báo</div>
                                        </Link>
                                        <ul class="header-navbar-list-notification-list">
                                            <div class="header-navbar-list-notification-list-padding">
                                                <div class="header-navbar-list-notification-heading">Thông Báo Mới Nhận
                                                </div>

                                                <li class="header-navbar-list-notification-list-item">
                                                    <div class="header-navbar-list-notification-list-item-image">
                                                        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                                                            alt="" class="header-navbar-list-notification-list-item-img" />
                                                    </div>
                                                    <div class="header-navbar-list-notification-list-item-text">
                                                        <div class="header-navbar-list-notification-list-item-text-heading">
                                                            asdasdas sadsad
                                                        </div>
                                                        <div
                                                            class="header-navbar-list-notification-list-item-text-container">
                                                            adssadasd
                                                        </div>
                                                        1222
                                                    </div>
                                                </li>


                                                <Link to="/account/notifications/order" class="header-navbar-list-notification-link-user">
                                                    <li class="header-navbar-list-notification-link-user-item">Xem tất cả
                                                    </li>
                                                </Link>
                                            </div>

                                        </ul>

                                        {/* <ul class="header-navbar-list-notification-list">
                                            <div class="header-navbar-list-notification-list-padding">
                                                <div class="header-navbar-list-notification-heading">Thông Báo Mới Nhận
                                                </div>


                                                <a href="notification.php" class="header-navbar-list-notification-link-user">
                                                    <li class="header-navbar-list-notification-link-user-item">Xem tất cả
                                                    </li>
                                                </a>
                                            </div>

                                        </ul> */}


                                    </div>
                                </div>
                            </li>
                            <li class="header-navbar-list-help">
                                <div class="header-navbar-list-help-flex">
                                    <a href="" class="header-navbar-list-help-link">
                                        <div class="header-navbar-list-help-icon">
                                            <i class="fal fa-question-circle"></i>
                                        </div>
                                        <div class="header-navbar-list-help-text">
                                            Hỗ Trợ
                                        </div>
                                    </a>
                                </div>
                            </li>
                            {user ?
                                <li class="header-navbar-list-item header-navbar-list-item-user">
                                    <img src="" alt=""
                                        class="header-navbar-user-img" />
                                    <img src="./img/avatar.png" alt=""
                                        class="header-navbar-user-img" />
                                    <span class="header-navbar-user-name">{user.phone}</span>
                                    <ul class="header-navbar-user-list">
                                        <Link to="/account/profile" class="header-navbar-user-link">
                                            <li class="header-bavber-user-list-item-myuser">Tài Khoản Của Tôi</li>
                                        </Link>
                                        <Link to="/account/purchase" class="header-navbar-user-link">
                                            <li class="header-bavber-user-list-item-myuser-user">Đơn Mua</li>
                                        </Link>
                                        <div class="header-navbar-user-link" onClick={handleLogout}>
                                            <li class="header-bavber-user-list-item-myuser-logout">Đăng Xuất</li>
                                        </div>
                                    </ul>
                                </li>

                                :
                                <div>
                                    <li class="header-navbar-list-item">
                                        <a href="register.php" class="header-navbar-list-link">
                                            Đăng Ký
                                        </a>
                                    </li>
                                    <li class="header-navbar-list-item">
                                        <a href="login.php" class="header-navbar-list-link">
                                            Đăng Nhập
                                        </a>
                                    </li>
                                </div>


                            }



                        </ul>

                    </div>
                    <div class="header-with">
                        <Link to="/" class="header-link-home">
                            <div class="header-with-logo">
                                <div class="header-with-logo-img">
                                    <div class="header-with-logo-img-img">
                                        {/* <img src={logo} class="header-with-logo-img-svg" /> */}
                                        <FaPinterest className="header-with-logo-img-svg" />
                                    </div>
                                    <div class=" header-with-logo-img-text">
                                        <b>PAN</b>

                                    </div>
                                </div>

                            </div>
                        </Link>

                        <div class="header-with-search">
                            <div class="header-width-search-flex">
                                <input type="text" name="searchtext" class="header-with-search-input" autocomplete="off" placeholder="Nhập để tìm kiếm sản phẩm" />
                                <button name="search" class="header-with-search-btn">
                                    <i class="header-with-search-btn-icon fal fa-search"></i>
                                </button>

                            </div>
                        </div>


                        <div class="header-with-cart">

                            <Link to="/cart" class="header-width-cart-hover">
                                <i class="header-with-cart-icon far fa-shopping-cart"></i>
                                <span class="header-width-cart-number">552</span>
                            </Link>

                        </div>

                    </div>
                    <div className="header__flex__big__catelogy">
                        <div className="header__flex__width">
                        </div>
                        <ul className="header__list">
                            <div className="header__list__flex">
                                <li className="header__list__item">
                                    <div className="header__list__link">hướng dẫn mua hàng</div>
                                </li>
                                <Link to="/collection/all" className="header__list__link__to">
                                    <div className="header__list__link">tất cả sản phẩm <i class="fal fa-chevron-down icon__down"></i></div>
                                    <ul className="header__list__all">
                                        <li className="header__list__product">
                                            <a className="header__list__product__link" >GIÀY CỎ TỰ NHIÊN</a>
                                        </li>
                                        <li className="header__list__product">
                                            <a className="header__list__product__link" >GIÀY CỎ NHÂN TẠO</a>
                                        </li>
                                        <li className="header__list__product">
                                            <a className="header__list__product__link" >GIÀY FUTSAL</a>
                                        </li>
                                        <li className="header__list__product header__product__colection">
                                            <a className="header__list__product__link " >GIÀY ĐÁ BANH NIKE</a>
                                            {/* <ul className="header__product__list__item">
                                            <li>asdas</li>
                                        </ul> */}
                                        </li>
                                        <li className="header__list__product">
                                            <a className="header__list__product__link" >GIÀY ĐÁ BANH ADIDAS</a>
                                        </li>
                                        <li className="header__list__product">
                                            <a className="header__list__product__link" >GIÀY ĐÁ BANH PUMA</a>
                                        </li>
                                        <li className="header__list__product">
                                            <a className="header__list__product__link" >GIÀY ĐÁ BANH MIZUNO</a>
                                        </li>
                                        <li className="header__list__product">
                                            <a className="header__list__product__link" >GIÀY ĐÁ BANH ASICS</a>
                                        </li>
                                        <li className="header__list__product">
                                            <a className="header__list__product__link" >GIÀY ĐÁ BANH MIZUNO</a>
                                        </li>
                                        <li className="header__list__product">
                                            <a className="header__list__product__link" >GIÀY ĐÁ BANH MIZUNO</a>
                                        </li>
                                    </ul>


                                </Link>

                                <li className="header__list__item">
                                    <div className="header__list__link">cách chọn size</div>
                                </li>
                                <li className="header__list__item">
                                    <div className="header__list__link">hệ thống cửa hàng</div>
                                </li>
                            </div>
                        </ul>
                        <div className="header__flex__width__2">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default Header;