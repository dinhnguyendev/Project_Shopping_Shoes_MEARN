import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getdetailsproducts } from "../../../../redux/apiRequest";
import './details.css';
function Details() {
    const products = useSelector(state => state.products.productdetails?.productdetail);
    return (
        <div>
            <div class="app-chitiet">
                <div class="container-details">
                    <div class="grid-details">
                        <div class="container-details-big">
                            <div class="container-details-big-image">
                                <div class="container-details-image">
                                    <img src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/p843x403/272332355_229817129351795_6097183794809378532_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=OH2z4VwClWAAX8cqxH5&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT9Hsa4wgXZj_SCazG10-RH-W3nLS_MnW19WeyebjHF1LQ&oe=61F511A5"
                                        alt="" id="container-details-image-img-id" class="container-details-image-img" />
                                </div>
                                <div class="container-details-imge-differenr">
                                    <div class="container-lider-big">

                                    </div>
                                </div>
                                <div class="container-details-share">
                                    <div class="container-details-share-text">Chia sẻ:</div>
                                    <div class="container-details-share-icon">
                                        <i class="fab fa-facebook-messenger container-details-share-icon-mess"></i>
                                        <i class="fab fa-facebook container-details-share-icon-facebook"></i>
                                        <i class="fab fa-pinterest container-details-share-icon-printer"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="container-details-big-text">
                                <div class="container-details-header">
                                    <div class="container-details-love-like">PAN</div>
                                    <span class="container-details-heading">{products?.name}</span>
                                </div>
                                <div class="container-details-box">
                                    <div class="container-details-evaluate">
                                        <div class="container-details-start">
                                            <div class="container-details-start-number">5.0</div>
                                            <div class="container-details-start-icon">
                                                <i class="fas fa-star container-details-start-icon-star"></i>
                                                <i class="fas fa-star container-details-start-icon-star"></i>
                                                <i class="fas fa-star container-details-start-icon-star"></i>
                                                <i class="fas fa-star container-details-start-icon-star"></i>
                                                <i class="fas fa-star container-details-start-icon-star"></i>
                                            </div>
                                        </div>
                                        <div class="container-details-sold">
                                            <div class="container-details-sold-number">
                                                7,3k
                                            </div>
                                            <div class="container-details-sold-text">
                                                Đã&nbsp;Bán
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-details-price">
                                    <div class="container-details-old-price">
                                        <div class="container-details-old-price-text">
                                            <sup>₫</sup>
                                        </div>
                                        <div class="container-details-old-price-number">
                                            asdsad
                                        </div>
                                    </div>
                                    <div class="container-details-new-price">
                                        <div class="container-details-new-price-text">
                                            <sup>₫</sup>
                                        </div>
                                        <div class="container-details-new-price-number">
                                            asd
                                        </div>
                                    </div>
                                    <div class="container-details-sale">50%&nbsp;GIẢM</div>
                                </div>
                                <div class="container-details-color">
                                    <label class="container-details-color-text">MÀU SẮC</label>
                                    <div class="container-details-color-item">
                                        <button class="container-details-button-color" onclick="onclickcolor()"
                                            checked="checked">
                                            trang
                                            <i class="fal fa-check container-details-button-focus"
                                            ></i>
                                            <div class="container-details-button-color-backg">
                                            </div>
                                        </button>

                                    </div>
                                </div>
                                <div class="container-details-size">
                                    <label class="container-details-size-text">SIZE</label>
                                    <div class="container-details-size-item">
                                        <button class="container-details-button-size" onclick="onclicksize()" checked="checked">
                                            s
                                            <i class="fal fa-check container-details-button-checked"
                                                onclick="event.stopPropagation()"></i>
                                            <div class="container-details-button-color-checked"
                                                onclick="event.stopPropagation()"></div>
                                        </button>
                                    </div>
                                </div>
                                <form method="POST" action="cart.php?action=add" class="form-submit">
                                    <div class="container-details-quantity">
                                        <div class="container-details-quantity-products">
                                            <div class="container-details-quantity-text">Số Lượng</div>
                                            <div class="container-details-quantity-number">
                                                <div class="container-details-quantity-number-quantity">
                                                    <div class="container-details-minus">
                                                        <i class="fal fa-minus container-details-minus-btn"></i>
                                                    </div>
                                                    <input type="number" class="container-details-input-text" min="1" max="300"
                                                        value="1" name="quantity" />

                                                    <div class="container-details-minus-btn-btn">
                                                        <i class="fal fa-plus container-details-minus-btn"></i>
                                                    </div>
                                                </div>
                                                <span class="container-details-quantity-number-product"> 155 sản phẩm có
                                                    sẵn</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container-details-button-add">
                                        <button class="container-details-add" name="addsubmit">
                                            <div class="container-details-add-text">
                                                <i class="fal fa-cart-plus container-details-add-text-icon"></i>Thêm Vào Giỏ
                                                Hàng
                                            </div>
                                        </button>
                                        <div class="container-details-link">
                                            <button type="submit" name="submit" class="container-details-button-buy">Mua
                                                Ngay</button>
                                        </div>

                                    </div>

                                </form>
                                <div class="container-details-hr"></div>
                                <div class="container-details-commit">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/67454c89080444c5997b53109072c9e0.png"
                                        alt="" class="container-details-commit-img" />
                                    <span class="container-details-commit-text-shopping">Shopping Đảm Bảo</span>
                                    <span class="container-details-commit-text">3 Ngày Trả Hàng / Hoàn Tiền</span>
                                </div>




                            </div>
                        </div>
                    </div>


                    <div class="grid-details-footer">

                        <div class="container-details-footer">
                            <div class="container-details-footer-one">
                                <div class="container-details-footer-heading">
                                    CHI TIẾT SẢN PHẨM
                                </div>
                                <div class="container-details-footer-text">
                                    <span class="text-details">
                                        asd
                                    </span>
                                </div>
                            </div>
                            <div class="container-details-footer-two">
                                <div class="container-details-footer-heading">
                                    MÔ TẢ SẢN PHẨM
                                </div>
                                <div class="container-details-footer-text">
                                    <span class="text-details">
                                        sadsa
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div class="app-chitiet-notifi">
                <div class="app-chitiet-notifi-big">
                    <div clas="app-chitiet-notifi-check">
                        <div class="app-chitiet-notifi-icon">
                            <i class="far fa-check app-chitiet-notifi-icon-color"></i>
                        </div>
                        <div class="app-chitiet-notifi-text">Sản phẩm đã được thêm vào Giỏ hàng</div>
                    </div>
                </div>
            </div>
            <div class="modal-details-img">
                <div class="details-image">
                    <div class="details-image-margin">
                        <div class="details-image-flex">
                            <div class="details-image-big">
                                <img src="" alt="" class="details-image-big-img" />
                            </div>
                            <div class="details-image-right">
                                <div class="details-image-heading">
                                    <div class="details-image-heading-text">
                                        sadasdsadas babdbaa asdhasdjashdas dbdasadhha bhhd
                                    </div>
                                </div>
                                <div class="details-image-small">
                                    <div class="details-image-small-item">
                                        <div class="details-image-small-item-border">
                                            <img src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/p843x403/272332355_229817129351795_6097183794809378532_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=OH2z4VwClWAAX8cqxH5&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT9Hsa4wgXZj_SCazG10-RH-W3nLS_MnW19WeyebjHF1LQ&oe=61F511A5"
                                                alt="" class="details-image-small-img" />
                                            <div class="details-image-small-item-border-color">
                                            </div>
                                            <div class="details-image-small-item-hover">
                                            </div>

                                        </div>

                                    </div>
                                    <div class="details-image-small-item">
                                        <div class="details-image-small-item-border">
                                            <img src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/p843x403/272332355_229817129351795_6097183794809378532_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=OH2z4VwClWAAX8cqxH5&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT9Hsa4wgXZj_SCazG10-RH-W3nLS_MnW19WeyebjHF1LQ&oe=61F511A5"
                                                alt="" class="details-image-small-img" />
                                            <div class="details-image-small-item-border-color">
                                            </div>
                                            <div class="details-image-small-item-hover">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Details;