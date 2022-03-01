import './pay.css';
function Pay() {
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


                    <div class="container-pay-products-margin">
                        <div class="container-pay-products-details">
                            <div class="container-pay-products-details-products">
                                <div class="container-pay-products-details-products-flex">
                                    <img src="https://techkalzen.com/wp-content/uploads/2020/02/tron-bo-nhung-hinh-anh-dep-buon-mang-tam-trang-suy-tu-1.jpg" alt=""
                                        class="container-pay-products-details-image" />
                                    <div class="container-pay-products-details-text">
                                        nguye ngocd dinh
                                    </div>

                                </div>
                            </div>
                            <div class="container-pay-products-details-type">
                                Loại:  trang,L
                            </div>
                            <div class="container-pay-products-details-price">
                                ₫99.000
                            </div>
                            <div class="container-pay-products-details-number">
                                55
                            </div>
                            <div class="container-pay-products-details-money">
                                ₫99
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-pay-footer">
                    <div class="container-pay-footer-numer">
                        <div class="container-pay-footer-numer-flex">
                            <div class="container-pay-footer-numer-text">Tổng thanh toán:</div>
                            <div class="container-pay-footer-numer-money">₫199.000</div>
                        </div>
                    </div>
                    <div class="container-pay-footer-button">
                        <div class="container-pay-footer-button-text">Nhấn "Đặt hàng" đồng nghĩa với việc bạn
                            đồng ý tuân theo Điều khoản Shopping</div>
                        <button name="orderss" class="container-pay-footer-btn">Đặt Hàng</button>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Pay;