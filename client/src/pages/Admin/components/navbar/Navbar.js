import React from 'react';
import './navbar.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const handleShowNavbar = (e) => {
        console.log(e);
        e.target.offsetParent.offsetParent.children[1].classList.toggle('show')
        console.log(e.target.offsetParent.offsetParent.children[1]);
    }

    return (
        <div className='navbar'>
            <div className="navbar__big">
                <div onClick={handleShowNavbar} className="navbar__item">
                    <div className="navbar__heading" >
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
                </div>
                <div className="navbar__content">
                    <Link to='product/all' className="navbar__content__item">Tất cả</Link>
                    <Link to='product/add' className="navbar__content__item">Thêm sản phẩm</Link>
                    <Link to='product/all' className="navbar__content__item">Sửa sản phẩm</Link>
                    <Link to='product/all' className="navbar__content__item">Xóa sản phẩm</Link>
                </div>
            </div>
            <div className="navbar__big">
                <div onClick={handleShowNavbar} className="navbar__item">
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
                </div>
                <div className="navbar__content">
                    <Link to='order/all' className="navbar__content__item">Tất cả</Link>
                    <Link to='order/all' className="navbar__content__item">Chi tiết đơn hàng</Link>
                </div>
            </div>
            <div className="navbar__big">
                <div onClick={handleShowNavbar} className="navbar__item">
                    <div className="navbar__heading" >
                        <img src="https://cf.shopee.vn/file/f82f8ccb649afcdf4f07f1dd9c41bcb0" alt="" className="navbar__heading__icon" />
                        <div className="navbar__heading__text">
                            <div className="navbar__heading__container">
                                <div className="navbar__heading__text__content">
                                    quản lý danh mục
                                </div>
                                <i class="fa-solid fa-angle-down navbar__heading__text__icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar__content">
                    <Link to='' className="navbar__content__item">Danh mục</Link>
                    <Link to='' className="navbar__content__item">Thương hiệu</Link>
                    <Link to='' className="navbar__content__item">Chi tiết thương hiệu</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;