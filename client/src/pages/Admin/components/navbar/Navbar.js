import React from 'react';
import './navbar.css';
import { useEffect } from 'react';
function Navbar() {
    useEffect(() => {
        const tag = document.querySelectorAll('.navbar__item');
        console.log(tag);
        for (var i = 0; i < tag.length; i++) {
            tag[i].onclick = function (e) {
                // console.log(e.currentTarget.children[0].children[1].children[0].children[1]);
                e.currentTarget.children[1].classList.toggle('show');
                e.currentTarget.children[0].children[1].children[0].children[1].classList.toggle('fa-angle-down');
                e.currentTarget.children[0].children[1].children[0].children[1].classList.toggle('fa-angle-up');
            }
        }
    }, [])

    return (
        <div className='navbar'>
            <div className="navbar__big">
                <div className="navbar__item">
                    <div className="navbar__heading" >
                        <img src="https://cf.shopee.vn/file/f82f8ccb649afcdf4f07f1dd9c41bcb0" alt="" className="navbar__heading__icon" />
                        <div className="navbar__heading__text">
                            <div className="navbar__heading__container">
                                <div className="navbar__heading__text__content">
                                    quản lý đơn hàng
                                </div>
                                <i class="fa-solid fa-angle-down navbar__heading__text__icon"></i>
                            </div>
                        </div>
                    </div>
                    <div className="navbar__content">
                        <a href='' className="navbar__content__item">Tất cả</a>
                        <a href='' className="navbar__content__item">Đơn hủy</a>
                    </div>
                </div>
                <div className="navbar__item">
                    <div className="navbar__heading">
                        <img src="https://cf.shopee.vn/file/f82f8ccb649afcdf4f07f1dd9c41bcb0" alt="" className="navbar__heading__icon" />
                        <div className="navbar__heading__text">
                            <div className="navbar__heading__container">
                                <div className="navbar__heading__text__content">
                                    quản lý sản phẩm
                                </div>
                                <i class="fa-solid fa-angle-down navbar__heading__text__icon"></i>
                            </div>
                        </div>
                    </div>
                    <div className="navbar__content">
                        <a href='' className="navbar__content__item">Tất cả</a>
                        <a href='' className="navbar__content__item">Đơn hủy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;