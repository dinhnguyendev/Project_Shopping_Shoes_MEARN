import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrderById, getOrderByUserId } from '../../../../redux/apiRequest';
import './purchase.css';
function Purchase() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.login?.currentUser);
    const order = useSelector(state => state.order.getOrderByUserId?.currentOrder);
    useEffect(() => {
        const userid = user._id;
        getOrderByUserId(dispatch, userid);
    }, [user]);
    const handleDeleteOrder = (e) => {
        const arr = e.target.id;
        const arrs = arr.split(",");
        const id = arrs[0];
        const active = arrs[1];
        const numberActive = Number(active);
        if (confirm("Bạn có chắc muốn xóa ? ") == true) {
            if (numberActive < 3) {
                deleteOrderById(id);
                alert("Đơn hàng đã được xóa");
                const userid = user._id;
                getOrderByUserId(dispatch, userid);
            } else {
                alert("Không thể xóa đơn hàng đang giao !");
            }
        }
    }
    return (
        <div class="grid-column-number-10">
            <div class="container-purchase">
                {order?.map(orders => {
                    return (
                        <div key={orders._id} class="container-purchase-space">
                            <div class="container-purchase-big">
                                <div class="container-purchase-header">
                                    <div class="container-purchase-header-flex1">
                                        <div class="container-purchase-header-love">Yêu Thích+</div>
                                        <div class="container-purchase-header-button-name">shopping</div>
                                        <button class="container-purchase-header-button">
                                            <i class="far fa-comment-alt-lines"></i>
                                            <span class="container-purchase-header-button-text">Chat</span>
                                        </button>
                                    </div>
                                    <div class="container-purchase-header-flex2">
                                        <div class="container-purchase-header-status-text">
                                            Trạng thái:
                                        </div>
                                        <div class="container-purchase-header-status-now">
                                            {orders.active == 1 && "Chờ Xác nhận" || orders.active == 2 && "Chờ giao hàng" || orders.active == 3 && "Đang giao hàng"}
                                        </div>
                                    </div>
                                </div>
                                {orders.products.map(pro => {
                                    return (
                                        <div className="">
                                            <div class="container-purchase-information">
                                                <div class="container-purchase-information-big">
                                                    <div class="container-purchase-information-flex">
                                                        <div class="container-purchase-information-image">
                                                            <img src={`http://localhost:5000//${pro.productId.image}`}
                                                                alt="" class="container-purchase-information-img" />
                                                        </div>
                                                        <div class="container-purchase-information-order">
                                                            <div class="container-purchase-information-order-flex">
                                                                <div class="container-purchase-information-order-details">
                                                                    <div
                                                                        class="container-purchase-information-order-details-heading">
                                                                        {pro.productId.name}
                                                                    </div>
                                                                    <div class="container-purchase-information-order-details-text">

                                                                        <div
                                                                            class="container-purchase-information-order-details-text-classify">
                                                                            <div class="order-flex-classify-1">Phân loại hàng:</div>
                                                                            <div class="order-flex-classify-2">
                                                                                {pro.color.name},{pro.size.name}

                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="container-purchase-information-order-details-text-num">
                                                                            x {pro.quantity}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div class="container-purchase-information-price">
                                                        {/* <div class="container-purchase-information-price-last"><sup>₫</sup>199.000
                                                        </div> */}
                                                        <div class="container-purchase-information-price-now"><sup>₫</sup>{pro.price.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="container-purchase-height"></div>
                                        </div>
                                    )
                                })}

                            </div>
                            <div class="container-purchase-sum-price">
                                <div class="container-purchase-sum-price-icon">
                                    <i class="fas fa-coins container-purchase-sum-price-icon-color"></i>
                                    <div class="container-purchase-sum-price-text">Tổng số tiền:</div>
                                </div>
                                <div class="container-purchase-sum-price-number"><sup>₫</sup>{orders.total.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</div>
                            </div>
                            <div class="container-purchase-button-list">
                                <div class="container-purchase-button-call">
                                    <button class="container-purchase-button-call-btn">Liên hệ Người bán</button>
                                </div>
                                <div class="container-purchase-button-cancel">
                                    <div onClick={handleDeleteOrder} id={[orders._id, orders.active]} class="container-purchase-button-cancel-btn">Hủy Đơn hàng</div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    );
}

export default Purchase;