import React from 'react';
import './order.css';
function Order() {
    return (
        <div className='order'>
            <div className="order__number">
                <div className="order__number__int">10</div>
                <div className="order__number__text">Đơn hàng</div>
            </div>
            <div className="order__container">
                <div className="order__container__flex">
                    <div className="order__container__item order__container__item__products">
                        <div className="order__container__item__heading">Sản phẩm</div>
                    </div>
                    <div className="order__container__item">
                        <div className="order__container__item__heading">Tổng Đơn hàng</div>
                    </div>
                    <div className="order__container__item">
                        <div className="order__container__item__heading">Ngày đặt hàng</div>
                    </div>
                    <div className="order__container__item">
                        <div className="order__container__item__heading">Trạng thái</div>
                    </div>
                    <div className="order__container__item">
                        <div className="order__container__item__heading">Thao tác</div>
                    </div>
                </div>
                <div className="order__product">
                    <div className="order__product__flex">
                        <div className="order__product__item order__product__item__product">
                            <div className="order__product__heading">Sữa Rửa Mặt Hada Labo CHÍNH HÃNG Dưỡng Ẩm Dưỡng Trắng Da Collagen Ngừa Lão Hóa Sửa Rửa Mặt Srm Hadalabo Rohto Nhật Dezy </div>
                        </div>
                        <div className="order__product__item">
                            <div className="order__product__heading">1.200.000đ</div>
                        </div>
                        <div className="order__product__item">
                            <div className="order__product__heading">19-11-2021</div>
                        </div>
                        <div className="order__product__item">
                            <div className="order__product__heading">Đang giao hàng</div>
                        </div>
                        <div className="order__product__item">
                            <div className="order__product__heading"><i class="fa-solid fa-eye"></i></div>
                        </div>
                    </div>
                    <div className="order__product__flex">
                        <div className="order__product__item order__product__item__product">
                            <div className="order__product__heading">Sữa Rửa Mặt Hada Labo CHÍNH HÃNG Dưỡng Ẩm Dưỡng Trắng Da Collagen Ngừa Lão Hóa Sửa Rửa Mặt Srm Hadalabo Rohto Nhật Dezy </div>
                        </div>
                        <div className="order__product__item">
                            <div className="order__product__heading">1.200.000đ</div>
                        </div>
                        <div className="order__product__item">
                            <div className="order__product__heading">19-11-2021</div>
                        </div>
                        <div className="order__product__item">
                            <div className="order__product__heading">Đang giao hàng</div>
                        </div>
                        <div className="order__product__item">
                            <div className="order__product__heading"><i class="fa-solid fa-eye"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;