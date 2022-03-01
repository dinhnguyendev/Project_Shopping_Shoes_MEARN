import './purchase.css';
function Purchase() {
    return (

        <div class="grid-column-number-10">
            <div class="container-purchase">
                <div class="container-purchase-space">
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
                                    dang giao
                                </div>
                            </div>
                        </div>
                        <div class="container-purchase-information">
                            <div class="container-purchase-information-big">
                                <div class="container-purchase-information-flex">
                                    <div class="container-purchase-information-image">
                                        <img src="https://cf.shopee.vn/file/2eba44f6ff42d4419b12ab9e73652d5c_tn"
                                            alt="" class="container-purchase-information-img" />
                                    </div>
                                    <div class="container-purchase-information-order">
                                        <div class="container-purchase-information-order-flex">
                                            <div class="container-purchase-information-order-details">
                                                <div
                                                    class="container-purchase-information-order-details-heading">
                                                    asdasda asdasdas
                                                </div>
                                                <div class="container-purchase-information-order-details-text">

                                                    <div
                                                        class="container-purchase-information-order-details-text-classify">
                                                        <div class="order-flex-classify-1">Phân loại hàng:</div>
                                                        <div class="order-flex-classify-2">
                                                            trang,XL

                                                        </div>
                                                    </div>
                                                    <div
                                                        class="container-purchase-information-order-details-text-num">
                                                        x 10
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div class="container-purchase-information-price">
                                    <div class="container-purchase-information-price-last"><sup>₫</sup>199.000
                                    </div>
                                    <div class="container-purchase-information-price-now"><sup>₫</sup>99.000
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-purchase-height"></div>
                    </div>
                    <div class="container-purchase-sum-price">
                        <div class="container-purchase-sum-price-icon">
                            <i class="fas fa-coins container-purchase-sum-price-icon-color"></i>
                            <div class="container-purchase-sum-price-text">Tổng số tiền:</div>
                        </div>
                        <div class="container-purchase-sum-price-number"><sup>₫</sup>1.999.000</div>
                    </div>
                    <div class="container-purchase-button-list">
                        <div class="container-purchase-button-call">
                            <button class="container-purchase-button-call-btn">Liên hệ Người bán</button>
                        </div>
                        <div class="container-purchase-button-cancel">
                            <a href="" class="container-purchase-button-cancel-btn">Hủy Đơn hàng</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Purchase;