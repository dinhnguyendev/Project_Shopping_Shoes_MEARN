import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOrder, checkedAddress } from '../../../../redux/apiRequest';
import './pay.css';
function Pay() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user.login?.currentUser);
    const orderAddress = useSelector(state => state.pay.orderAddress?.currentAddress);
    const product = useSelector(state => state.cart.getcart?.currentCart);
    const arrproduct = [];
    console.log(orderAddress);
    const handleSubmit = async () => {
        const userid = user._id;
        const arr = [];
        product.map(products => {
            if (products.active) {
                arr.push(products);
            }
        });
        if (orderAddress != null) {
            const idAddres = await orderAddress;
            const res = await axios.get(`http://localhost:5000/user/address/${userid}/${idAddres}`);
            console.log(res.data[0]);
            const addressOrder = res.data[0];
            addOrder(dispatch, navigate, userid, arr, addressOrder, total);
        } else {
            alert("Bạn chưa chọn nơi nhận hàng");
        }
    }
    let total = 0;
    return (
        <div class="grid-pay">
            <div class="container-pay-products">
                <div class="container-pay-products-big">
                    <div class="container-pay-products-category">
                        <div class="container-pay-products-category-products">
                            Sản phẩm
                        </div>
                        <div class="container-pay-products-category-space">

                        </div>
                        <div class="container-pay-products-category-price">
                            Đơn giá
                        </div>
                        <div class="container-pay-products-category-number">
                            Số lượng
                        </div>
                        <div class="container-pay-products-category-money">
                            Thành tiền
                        </div>
                    </div>
                    <div class="container-pay-products-handle">
                        <i class="fab fa-opencart container-pay-products-handle-icon"></i>
                        <div class="container-pay-products-handle-text">Xử lý đơn hàng bởi PAN</div>
                    </div>

                    {product.map(products => {
                        if (products.active) {
                            total = total + (products.price * products.quantity);

                            return (
                                <div key={products._id} class="container-pay-products-margin">
                                    <div class="container-pay-products-details">
                                        <div class="container-pay-products-details-products">
                                            <div class="container-pay-products-details-products-flex">
                                                <img src="https://techkalzen.com/wp-content/uploads/2020/02/tron-bo-nhung-hinh-anh-dep-buon-mang-tam-trang-suy-tu-1.jpg" alt=""
                                                    class="container-pay-products-details-image" />
                                                <div class="container-pay-products-details-text">
                                                    {products.productId.name}
                                                </div>

                                            </div>
                                        </div>
                                        <div class="container-pay-products-details-type">
                                            Loại:  {products.color.name},{products.size.name}
                                        </div>
                                        <div class="container-pay-products-details-price">
                                            ₫{products.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                        </div>
                                        <div class="container-pay-products-details-number">
                                            {products.quantity}
                                        </div>
                                        <div class="container-pay-products-details-money">
                                            ₫{(products.price * products.quantity).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                        </div>
                                    </div>
                                </div>
                            )
                        }



                    })}
                </div>

                <div class="container-pay-footer">
                    <div class="container-pay-footer-numer">
                        <div class="container-pay-footer-numer-flex">
                            <div class="container-pay-footer-numer-text">Tổng thanh toán:</div>
                            <div class="container-pay-footer-numer-money">{total.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
                        </div>
                    </div>
                    <div class="container-pay-footer-button">
                        <div class="container-pay-footer-button-text">Nhấn "Đặt hàng" đồng nghĩa với việc bạn
                            đồng ý tuân theo Điều khoản Shopping</div>
                        <button onClick={handleSubmit} name="orderss" class="container-pay-footer-btn">Đặt Hàng</button>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Pay;