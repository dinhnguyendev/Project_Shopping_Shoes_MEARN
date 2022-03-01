import { Link } from 'react-router-dom';
import './navbarAccount.css';
function NavbarAccount() {
    const handleShowNavigation = () => {
        //remove notification
        const ShowNotification = document.querySelector('.account-navbar-container-item__notification');
        ShowNotification.classList.remove('block1');
        //show profile
        const ShowNavigation = document.querySelector('.account-navbar-container-item');
        ShowNavigation.classList.add('block');
    }
    const handleCloseNavigation = () => {
        //remove all
        const ShowNavigation = document.querySelector('.account-navbar-container-item');
        const ShowNotification = document.querySelector('.account-navbar-container-item__notification');
        ShowNotification.classList.remove('block1');
        ShowNavigation.classList.remove('block');
    }
    const handleShowNotification = () => {
        //remove profile
        const ShowNavigation = document.querySelector('.account-navbar-container-item');
        ShowNavigation.classList.remove('block');
        //show notification
        const ShowNotification = document.querySelector('.account-navbar-container-item__notification');
        ShowNotification.classList.add('block1');
    }
    return (
        <div class="grid-column-number-2">
            <div class="account-navbar">
                <div class="account-navbar-heading">
                    <div class="account-navbar-heading-image">
                        <img src="https://cf.shopee.vn/file/2eba44f6ff42d4419b12ab9e73652d5c_tn"
                            alt="" class="account-navbar-heading-img" />
                    </div>
                    <div class="account-navbar-heading-text">
                        <div class="account-navbar-heading-name">
                            beaxbox
                        </div>
                        <a href="" class="account-navbar-heading-link">
                            <i class="fas fa-pencil-alt"></i>
                            Sửa hồ sơ
                        </a>
                    </div>
                </div>
                <div class="account-navbar-container">
                    <div class="account-navbar-container-list">
                        <div class="account-navbar-container-flex">
                            <Link onClick={handleShowNavigation} to="/account/profile" class="account-navbar-container-heading">
                                <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" alt=""
                                    class="account-navbar-container-image" />
                                <div class="account-navbar-container-heading-text">
                                    Tài khoản của tôi
                                </div>
                            </Link>

                        </div>
                        <div className="account-navbar-container-item">
                            <div class="account-navbar-container-item-list">
                                <Link to="/account/profile" class="account-navbar-container-link">Hồ sơ</Link>
                            </div>
                            <div class="account-navbar-container-item-list">
                                <Link to="/account/password" class="account-navbar-container-link">Đổi mật khẩu</Link>
                            </div>
                        </div>
                    </div>
                    <div class="account-navbar-container-orther">
                        <Link onClick={handleCloseNavigation} to="/account/purchase" class="account-navbar-container-orther-link">
                            <img src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078"
                                class="account-navbar-container-image" />
                            <div class="account-navbar-container-orther-text">Đơn Mua</div>
                        </Link>

                    </div>
                    <div class="account-navbar-container-notifition">
                        <Link onClick={handleShowNotification} to="/account/notifications/order" class="account-navbar-container-notifition-link">
                            <img src="https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c"
                                class="account-navbar-container-notify-img" />
                            <div class="account-navbar-container-notifition-text">Thông Báo</div>
                        </Link>

                    </div>
                    <div className="account-navbar-container-item__notification">
                        <div class="account-navbar-container-item-list__notification">
                            <Link to="/account/notifications/order" class="account-navbar-container-link__notification">Cập nhật đơn hàng</Link>
                        </div>
                        <div class="account-navbar-container-item-list__notification">
                            <Link to="/account/notifications/promotion" class="account-navbar-container-link__notification">Khuyến mãi</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    );
}

export default NavbarAccount;