
import './cart.css';
function Cart() {
    return (
        <div class="container-cart">
            <div class="grid-header">
                <div class="container-cart-big">
                    <div class="container-cart-heading">
                        <div class="container-cart-heading-item">
                            <div class="container-cart-heading-icon"><i
                                class="fad fa-shipping-fast container-cart-heading-icon-color"></i></div>
                            <div class="container-cart-heading-text">Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn
                                phí vận chuyển bạn nhé!
                            </div>
                        </div>
                    </div>
                    <div class="container-cart-category">
                        <div class="container-cart-category-item">
                            <div class="container-cart-category-input">
                                <input type="checkbox" class="container-cart-category-input-check" />
                            </div>
                            <div class="container-cart-category-products">
                                <div class="container-cart-category-products-item">
                                    Sản phẩm
                                </div>
                            </div>
                            <div class="container-cart-price">
                                <div class="container-cart-price-item">Đơn giá</div>
                            </div>
                            <div class="container-cart-quantity">
                                <div class="container-cart-quantity-item">
                                    Số lượng
                                </div>
                            </div>
                            <div class="container-cart-money">
                                <div class="container-cart-money-item">
                                    Số tiền
                                </div>
                            </div>
                            <div class="container-cart-operation">
                                <div class="container-cart-operation-item">
                                    Thao tác
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-cart-details">
                        <div class="container-cart-details-big">
                            <div class="container-cart-details-heading">
                                <div class="container-cart-details-heading-love">Yêu thích+</div>
                                <div class="container-cart-details-heading-icon">
                                    icon
                                </div>
                                <div class="container-cart-details-heading-text">Shopping</div>
                                <div class="container-cart-details-heading-chat">
                                    <i class="far fa-comment-alt-lines"></i>

                                </div>
                            </div>




                            <div class="container-cart-details-products">
                                <div class="container-cart-details-products-input">
                                    <input type="checkbox" name="" value="" class="container-cart-details-products-input-check" />
                                </div>
                                <div class="container-cart-details-products-product">
                                    <div class="container-cart-details-products-product-big">
                                        <div class="container-cart-details-products-product-item1">
                                            <a href="" class="container-cart-details-products-link1">
                                                <div class="container-cart-details-products-image">
                                                    <img src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/p843x403/272187781_504223491048732_5114414854160379350_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=mdeOvaazK1sAX-89BTa&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT9lYOmkm6UxLTEmZFdzn5aB3Lhh3X5vzyOAbA_JaQbsog&oe=61F97D5C"
                                                        alt="" class="container-cart-details-products-img" />
                                                </div>
                                            </a>
                                        </div>
                                        <div class="container-cart-details-products-product-item2">
                                            <a href="" class="container-cart-details-products-link2">
                                                <div class="container-cart-details-products-text">
                                                    dasdasd asd
                                                </div>
                                            </a>
                                            <div class="container-cart-details-products-image-sale">
                                                <img src="https://cf.shopee.vn/file/b6a5d995ed7d4875c78a012fac73bbe2"
                                                    alt="" class="container-cart-details-products-img-sale" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-cart-details-products-classity">
                                    <div class="container-cart-details-products-classity-big">
                                        <div class="container-cart-details-products-classity-heading">
                                            <div class="container-cart-details-products-classity-item">Phân loại hàng:<i
                                                class="fal fa-sort-down container-cart-details-products-classity-button-btn"></i>

                                            </div>
                                        </div>
                                        <div class=" container-cart-details-products-classity-text">
                                            <div class="container-cart-details-products-color">trang</div>
                                            <div class="container-cart-details-products-space">,</div>
                                            <div class="container-cart-details-products-size">XL</div>
                                            <div class="container-cart-details-products-daucham">.</div>

                                        </div>
                                    </div>
                                </div>
                                <div class="container-cart-details-products-price">
                                    <div class="container-cart-details-products-price-big">
                                        <div class="container-cart-details-products-price-last">₫199.000</div>
                                        <div class="container-cart-details-products-price-now">₫99.000</div>
                                    </div>
                                </div>
                                <div class="container-cart-details-products-number">
                                    <div class="container-details-quantity-products">
                                        <div class="container-details-quantity-number-quantity">
                                            <div class="container-details-minus" >
                                                <i class="fal fa-minus container-details-minus-btn"></i>
                                            </div>
                                            <input type="number"
                                                class="container-details-input-text" min="1" max="300"
                                                value="1" />

                                            <div class="container-details-minus-btn-btn">
                                                <i class="fal fa-plus container-details-minus-btn"></i>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="container-cart-details-products-money">
                                    <div class="container-cart-details-products-money-number">
                                        ₫99
                                    </div>
                                </div>
                                <div class="container-cart-details-products-operation">
                                    <div class="container-cart-details-products-operation-item">
                                        <a href="" class="container-cart-details-products-delete">Xóa</a>
                                    </div>
                                </div>

                            </div>
                            <div class="container-cart-details-buy-button" >
                                <button class="container-cart-details-buy-btn" name="submitadd">Cập nhật</button>
                            </div>

                            <div class="container-cart-details-buy">
                                <div class="container-cart-details-buy-flex">
                                    <div class="container-cart-details-buy-flex-item1">
                                        <div class="container-cart-details-buy-input">
                                            <input type="checkbox" class="container-cart-details-buy-input-check" />
                                        </div>
                                        <div class="container-cart-details-buy-list">
                                            <button class="container-cart-details-buy-list-item">Chọn tất cả
                                                (183)</button>
                                        </div>
                                        <div class="container-cart-details-buy-delete">
                                            <div href="" class="container-cart-details-buy-link">Xóa</div>
                                        </div>

                                    </div>
                                    <div class="container-cart-details-buy-flex-item2">
                                        <div class="container-cart-details-buy-sum">
                                            <div class="container-cart-details-buy-sum-text">
                                                Tổng thanh toán (0 Sản phẩm):
                                            </div>
                                            <div class="container-cart-details-buy-sum-number">
                                                ₫0
                                            </div>
                                        </div>
                                        <div class="container-cart-details-buy-button">
                                            <button class="container-cart-details-buy-btn" name="submitlink">Mua hàng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Cart;