import React from 'react';
import { FaPinterest } from 'react-icons/fa'
import './header.css';
function Header() {
    return (
        <div className='header__admin'>
            <div className="header__admin__flex">
                <div className="header__item">
                    <div className="header__icon">
                        <FaPinterest className="header__logo" />
                    </div>
                    <div className="header__text">trang chủ</div>
                </div>
                <div className="header__content">
                    <div className="header__content__profile">
                        <div className="header__content__profile__hover">
                            <img src="https://cf.shopee.vn/file/2eba44f6ff42d4419b12ab9e73652d5c" alt="" className="header__content__image" />
                            <div className="header__content__name">beabox</div>

                        </div>

                        <div className="header__content__profile__list">
                            <div className="header__content__profile__item">
                                <div className="header__content__profile__item__icon">
                                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                </div>
                                <div className="header__content__profile__item__logout">
                                    Đăng xuất
                                </div>
                            </div>
                            <div className="header__content__profile__item">
                                <div className="header__content__profile__item__icon">
                                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                </div>
                                <div className="header__content__profile__item__logout">
                                    Đăng xuất
                                </div>
                            </div>
                            <div className="header__content__poniter">

                            </div>
                        </div>

                    </div>
                    <div className="header__content__category">
                        <div className="header__content__category__icon">
                            <i class="fa-solid fa-list header__content__icon__img"></i>
                            <div className="header__content__icon__list">
                                <div className="header__content__icon__list__flex">
                                    <div className="header__content__icon__list__item">
                                        <div className="header__content__icon__details">
                                            <div className="header__content__icon__svg__padding__1">
                                                <svg className='header__content__icon__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M29.5 12.4h-1.8v18H4.3v-18H2.5V7h7.8c-.4-.6-.6-1.2-.6-1.8 0-2 1.6-3.6 3.6-3.6 1.1 0 2.1.5 2.7 1.3.6-.8 1.6-1.3 2.7-1.3 2 0 3.6 1.6 3.6 3.6 0 .6-.2 1.3-.5 1.8h7.8v5.4zM16.9 28.6h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm-10.8 9h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm7.2-16.2c-1 0-1.8.8-1.8 1.8S12.3 7 13.3 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm5.4 0c-1 0-1.8.8-1.8 1.8S17.7 7 18.7 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm9 5.4H4.3v1.8h23.5V8.8z"></path></svg>
                                            </div>
                                        </div>
                                        <div className="header__content__icon__heading">Sản phẩm</div>
                                    </div>
                                    <div className="header__content__icon__list__item">
                                        <div className="header__content__icon__details">
                                            <div className="header__content__icon__svg__padding__2">
                                                <svg className='header__content__icon__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M8 25.5v-2h22v2H8zm0-10h22v2H8v-2zm0-8h22v2H8v-2zM1.6 23.2h2.8V26H1.6v-2.8zm0-8.1h2.8v2.8H1.6v-2.8zm0-8h2.8v2.8H1.6V7.1z"></path></svg>
                                            </div>
                                        </div>
                                        <div className="header__content__icon__heading">Danh mục</div>
                                    </div>
                                    <div className="header__content__icon__list__item">
                                        <div className="header__content__icon__details">
                                            <div className="header__content__icon__svg__padding__3">
                                                <svg className='header__content__icon__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28 16.9v12.8H4V16.6c-1-.9-1.7-2.6-1.7-4.1L5.7 2.2h20.6l3.4 10.3c.1 1.8-.4 3.5-1.7 4.4zM5.7 28h20.6v-3.4H5.7V28zm0-5.1h20.6v-5.2c-.3 0-.5.1-.9.1-1.3 0-2.7-.7-3.4-1.7-.7 1-1.6 1.7-3 1.7-1.2 0-2.3-.9-3-1.7-.7.9-1.8 1.7-3 1.7-1.4 0-2.3-.7-3-1.7-.8 1-2.2 1.7-3.5 1.7-.3 0-.5 0-.8-.1v5.2zM25.2 4H6.8l-2.3 6.9h22.9L25.2 4zM4 12.6C4.2 14 5.3 16 6.5 16s2.7 0 2.7-1.7h1.7s0 1.7 2.1 1.7 2.1-1.7 2.1-1.7h1.8S16.8 16 19 16c2.1 0 2.1-1.7 2.1-1.7H23s0 1.7 2.7 1.7c2.5 0 2.5-3.4 2.5-3.4H4z"></path></svg>
                                            </div>
                                        </div>
                                        <div className="header__content__icon__heading">Đơn hàng</div>
                                    </div>
                                    <div className="header__content__icon__list__item">
                                        <div className="header__content__icon__details">
                                            <div className="header__content__icon__svg__padding__4">
                                                <svg className='header__content__icon__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27.8 27.1H8.5c-1 0-1.8-.8-1.8-1.8v-1.8h1.8v.9c0 .5.4.9.9.9H27c.5 0 .9-.4.9-.9V12.2c0-.5-.4-.9-.9-.9h-1v-.9c0-.5-.4-.9-.9-.9h2.6c1 0 1.8.8 1.8 1.8v14c.1 1-.7 1.8-1.7 1.8zm-5.3-5.2H3.2c-1 0-1.8-.8-1.8-1.8v-14c0-1 .8-1.8 1.8-1.8h19.3c1 0 1.8.8 1.8 1.8v14c0 1-.8 1.8-1.8 1.8zm0-15c0-.5-.4-.9-.9-.9H4.1c-.5 0-.9.4-.9.9v12.3c0 .5.4.9.9.9h17.6c.5 0 .9-.4.9-.9V6.9zm-7 8c0 1.1-.8 2.2-2.1 2.4v1.1h-1v-1.1c-1.4-.2-2.2-1.1-2.2-1.1l.8-1.1s.9.9 1.9.9c.6 0 1.1-.4 1.1-1 0-1.4-3.7-1.2-3.7-3.7 0-1.2.9-2.1 2.1-2.3V7.8h1v1.1c1.3.1 1.9.9 1.9.9l-.5 1.2s-.8-.7-1.8-.7c-.7 0-1.1.4-1.1 1-.1 1.3 3.6 1.1 3.6 3.6z"></path></svg>
                                            </div>
                                        </div>
                                        <div className="header__content__icon__heading">Doanh thu</div>
                                    </div>

                                </div>
                                <div className="header__content__category__pointer"></div>
                            </div>
                        </div>
                    </div>
                    <div className="header__content__notification">
                        <div className="header__content__notification__item">
                            <i class="fa-solid fa-bell"></i>
                        </div>
                        <span className="header__content__notification__number">25</span>
                        <ul class="header-navbar-list-notification-list">
                            <div class="header-navbar-list-notification-list-padding">
                                <div class="header-navbar-list-notification-heading">Thông báo đã nhận gần đây
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


                                <a to="/account/notifications/order" class="header-navbar-list-notification-link-user">
                                    <li class="header-navbar-list-notification-link-user-item">Xem tất cả
                                    </li>
                                </a>
                            </div>

                        </ul>
                    </div>
                    <div className="header__content__brand">
                        <div className="header__content__brand__text">PAN</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;