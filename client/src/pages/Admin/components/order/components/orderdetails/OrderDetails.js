import React from 'react';
import './orderdetails.css';
function OrderDetails() {
    return (
        <div>
            <div className='order__details'>
                <div className="order__details__info__customer">
                    <div className="order__details__info__customer__flex">

                        <div className="order__details__info__customer__item">
                            <div className="order__details__info__customer__heading">Tài Khoản</div>
                        </div>
                        <div className="order__details__info__customer__item">
                            <div className="order__details__info__customer__heading">Tên Nhận Hàng</div>
                        </div>
                        <div className="order__details__info__customer__item">
                            <div className="order__details__info__customer__heading">SĐT Nhận Hàng</div>
                        </div>
                        <div className="order__details__info__customer__item">
                            <div className="order__details__info__customer__heading">Tổng Tiền Hàng</div>
                        </div>
                        <div className="order__details__info__customer__item">
                            <div className="order__details__info__customer__heading">Ngày Đặt Hàng</div>
                        </div>
                        <div className="order__details__info__customer__item">
                            <div className="order__details__info__customer__heading">Trạng Thái</div>
                        </div>
                    </div>
                </div>
                <div className="order__details__info__products">
                    <div className="order__details__info__products__flex">
                        <div className="order__details__info__products__item">
                            <div className="order__details__info__products__heading">0389442897</div>
                        </div>
                        <div className="order__details__info__products__item">
                            <div className="order__details__info__products__heading">nguyen ngoc dinh</div>
                        </div>
                        <div className="order__details__info__products__item">
                            <div className="order__details__info__products__heading">0389442897</div>
                        </div>
                        <div className="order__details__info__products__item">
                            <div className="order__details__info__products__heading"><b>372.000đ</b></div>
                        </div>
                        <div className="order__details__info__products__item">
                            <div className="order__details__info__products__heading">19-11-2021</div>
                        </div>
                        <div className="order__details__info__products__item">
                            <div className="order__details__info__products__heading">Chờ Xác Nhận</div>
                        </div>
                    </div>
                </div>
                <div className="order__details__category">
                    <div className="order__details__category__flex">
                        <div className="order__details__category__item order__details__category__heading__product">
                            <div className="order__details__category__heading ">
                                Tên sản phẩm
                            </div>
                        </div>
                        <div className="order__details__category__item">
                            <div className="order__details__category__heading">
                                Màu Sắc
                            </div>
                        </div>
                        <div className="order__details__category__item">
                            <div className="order__details__category__heading">
                                Size
                            </div>
                        </div>
                        <div className="order__details__category__item">
                            <div className="order__details__category__heading">
                                Số Lượng
                            </div>
                        </div>
                        <div className="order__details__category__item">
                            <div className="order__details__category__heading">
                                Đơn Giá
                            </div>
                        </div>
                        <div className="order__details__category__item">
                            <div className="order__details__category__heading">
                                Thành Tiền
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order__details__products">
                    <div className="order__details__products__flex">
                        <div className="order__details__products__item order__details__products__heading__big">
                            <div className="order__details__products__heading order__details__products__heading__text">ADIDAS PREDATOR EDGE .1 LOW FG SAPPHIRE EDGE - HI-RES BLUE/TURBO ADIDAS PREDATOR EDGE .1 LOW FG SAPPHIRE EDGE - HI-RES BLUE/TURBO </div>
                        </div>
                        <div className="order__details__products__item">
                            <div className="order__details__products__heading">ĐEN</div>
                        </div>
                        <div className="order__details__products__item">
                            <div className="order__details__products__heading">40.5</div>
                        </div>
                        <div className="order__details__products__item">
                            <div className="order__details__products__heading">2</div>
                        </div>
                        <div className="order__details__products__item">
                            <div className="order__details__products__heading">2,150,000₫</div>
                        </div>
                        <div className="order__details__products__item">
                            <div className="order__details__products__heading">4,300,000₫</div>
                        </div>
                    </div>
                    <div className="order__details__products__flex">
                        <div className="order__details__products__item order__details__products__heading__big">
                            <div className="order__details__products__heading order__details__products__heading__text">ADIDAS PREDATOR EDGE .1 LOW FG SAPPHIRE EDGE - HI-RES BLUE/TURBO ADIDAS PREDATOR EDGE .1 LOW FG SAPPHIRE EDGE - HI-RES BLUE/TURBO </div>
                        </div>
                        <div className="order__details__products__item">
                            <div className="order__details__products__heading">ĐEN</div>
                        </div>
                        <div className="order__details__products__item">
                            <div className="order__details__products__heading">40.5</div>
                        </div>
                        <div className="order__details__products__item">
                            <div className="order__details__products__heading">2</div>
                        </div>
                        <div className="order__details__products__item">
                            <div className="order__details__products__heading">2,150,000₫</div>
                        </div>
                        <div className="order__details__products__item">
                            <div className="order__details__products__heading">4,300,000₫</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="order__details__button">
                <div className="order__details__button__flex">
                    <div className="order__details__button__item">
                        <button className="order__details__button__btn">Trở về</button>
                    </div>
                    <div className="order__details__button__item">
                        <button className="order__details__button__btn">Xác nhận đơn hàng</button>
                    </div>
                    <div className="order__details__button__item">
                        <button className="order__details__button__btn">Xác nhận lấy hàng</button>
                    </div>
                    <div className="order__details__button__item">
                        <button className="order__details__button__btn">Xác nhận giao hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;