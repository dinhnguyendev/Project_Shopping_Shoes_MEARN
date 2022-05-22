import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getOrderDetails } from '../../../../../../redux/apiRequest';
import './order.css';
function OrderAdmin() {
    const order = useSelector(state => state.order.getOrder?.currentOrder);
    console.log(order);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='order'>
            <div className="order__number">
                <div className="order__number__int">{order.length}</div>
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
                    {order?.map(orders => {
                        const date = new Date(orders.createdAt);
                        const d = date.getDate();
                        const m = date.getMonth();
                        const y = date.getFullYear();
                        return (
                            <div key={orders._id} className="order__product__flex">
                                <div className="order__product__item order__product__item__product">
                                    <div className="order__product__heading">{orders.products?.map(names => {
                                        return (
                                            names.productId.name
                                        )
                                    })} </div>
                                </div>
                                <div className="order__product__item">
                                    <div className="order__product__heading">{orders.total.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
                                </div>
                                <div className="order__product__item">
                                    <div className="order__product__heading">{d + "-" + m + "-" + y}</div>
                                </div>
                                <div className="order__product__item">
                                    <div className="order__product__heading">{orders.active == 1 && "Chờ xác nhận" || orders.active == 2 && "Đã xác nhận" || orders.active == 3 && "Đang giao hàng"}</div>
                                </div>
                                <div className="order__product__item">
                                    <Link to={`../details/${orders._id}`}>
                                        <div className="order__product__heading"><i id={orders._id} class="fa-solid fa-eye order__product__heading__padding"></i></div>
                                    </Link>
                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>
        </div>
    );
}

export default OrderAdmin;