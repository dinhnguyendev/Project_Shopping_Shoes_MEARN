import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrderDetails, updateOrderDeliver, updateOrderPickup } from '../../../../../../redux/apiRequest';
import './orderdetails.css';
function OrderDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        getOrderDetails(dispatch, id);
    }, []);
    const orderDetail = useSelector(state => state.order.getOrderDetails?.currentOrder);
    const [idorder, setIdorder] = useState('');

    console.log(orderDetail);
    console.log(orderDetail);
    console.log(orderDetail);
    console.log(orderDetail);
    console.log(orderDetail);

    const handleConfirmDelivery = () => {
        const idorder = orderDetail[0]._id;
        updateOrderDeliver(idorder);
        getOrderDetails(dispatch, id);
        alert("Xác nhận thành công");
    }
    const handleConfirmPickup = () => {
        const idorder = orderDetail[0]._id;
        updateOrderPickup(idorder);
        getOrderDetails(dispatch, id);
        alert("Xác nhận thành công");
    }
    const handleBack = () => {
        history.back();
    }
    return (
        <div>
            {orderDetail?.map(orderDetails => {
                const dates = new Date(orderDetails.createdAt);
                const d = dates.getDate();
                const m = dates.getMonth();
                const y = dates.getFullYear();

                return (
                    <div className="">
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
                                        <div className="order__details__info__products__heading">{orderDetails.userid.name}</div>
                                    </div>
                                    <div className="order__details__info__products__item">
                                        <div className="order__details__info__products__heading">{orderDetails.addressOrder.name}</div>
                                    </div>
                                    <div className="order__details__info__products__item">
                                        <div className="order__details__info__products__heading">{orderDetails.addressOrder.phone}</div>
                                    </div>
                                    <div className="order__details__info__products__item">
                                        <div className="order__details__info__products__heading"><b>{orderDetails.total}</b></div>
                                    </div>
                                    <div className="order__details__info__products__item">
                                        <div className="order__details__info__products__heading">{`${d}-${m}-${y}`}</div>
                                    </div>
                                    <div className="order__details__info__products__item">
                                        <div className="order__details__info__products__heading">{orderDetails.active == 1 && "Chờ xác nhận" || orderDetails.active == 2 && "Chờ giao hàng" || orderDetails.active == 3 && "Đang giao hàng"}</div>
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
                                {orderDetails.products.map(product => {
                                    return (
                                        <div className="order__details__products__flex">
                                            <div className="order__details__products__item order__details__products__heading__big">
                                                <div className="order__details__products__heading order__details__products__heading__text">{product.productId.name}</div>
                                            </div>
                                            <div className="order__details__products__item">
                                                <div className="order__details__products__heading">{product.color.name}</div>
                                            </div>
                                            <div className="order__details__products__item">
                                                <div className="order__details__products__heading">{product.size.name}</div>
                                            </div>
                                            <div className="order__details__products__item">
                                                <div className="order__details__products__heading">{product.quantity}</div>
                                            </div>
                                            <div className="order__details__products__item">
                                                <div className="order__details__products__heading">{product.price.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</div>
                                            </div>
                                            <div className="order__details__products__item">
                                                <div className="order__details__products__heading">{(Number(product.quantity) * Number(product.price)).toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</div>
                                            </div>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                        <div className="order__details__button">
                            <div className="order__details__button__flex">
                                <div className="order__details__button__item">
                                    <button onClick={handleBack} className="order__details__button__btn">Trở về</button>
                                </div>
                                <div className="order__details__button__item">
                                    <button onClick={handleConfirmPickup} className="order__details__button__btn">Xác nhận đơn hàng</button>
                                </div>
                                <div className="order__details__button__item">
                                    <button onClick={handleConfirmDelivery} className="order__details__button__btn">Xác nhận giao hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })

            }
        </div>
    );
}

export default OrderDetails;