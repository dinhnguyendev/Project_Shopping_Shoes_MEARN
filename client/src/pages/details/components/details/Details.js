import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getdetailsproducts, getToCart, postToCart, postToCart1 } from "../../../../redux/apiRequest";
import './details.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sliderimage.css';
function Details() {
    const [image, setImage] = useState('');
    const [number, setNumber] = useState(1);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const products = useSelector(state => state.products.productdetails?.productdetail);
    const users = useSelector(state => state.user.login?.currentUser);
    console.log(products);
    console.log(products);
    console.log(products);
    console.log(products);
    console.log(products);
    //xu ly hover vao gan gia tri cho image big
    useEffect(() => {
        const imageElement = document.querySelector('.container-details-image-img');
        const imageDetailsElement = document.querySelectorAll('.image__customer');
        for (let i = 0; i < imageDetailsElement.length; i++) {
            imageDetailsElement[i].onmouseover = function () {
                setImage(imageDetailsElement[i].src);
            }
        }
    }, []);

    //xu ly add,sub input so luong 
    const handleSetNumberSub = () => {
        if (number <= 1) {
            return setNumber(1);
        }
        setNumber(Number(number) - 1);
    }
    const handleSetNumberAdd = () => {
        setNumber(Number(number) + 1);
        if (number > 99) {
            setNumber(100);
        }
    }
    function handleNumber(e) {
        if (e.target.value < 1) {
            setNumber(1);
        } else if (e.target.value > 100) {
            setNumber(100);
        } else {
            setNumber(e.target.value);
        }
    }
    //xy ly click vao button color hien border,icon,background ra
    const handleClickButonColor = (e) => {
        const elementColor = document.querySelectorAll('.container-details-button-color');
        const elementIcon = document.querySelectorAll('.container-details-button-focus');
        const elementBrg = document.querySelectorAll('.container-details-button-color-backg');
        for (let i = 0; i < elementIcon.length; i++) {
            elementIcon[i].classList.remove('click');
        }
        for (let i = 0; i < elementBrg.length; i++) {
            elementBrg[i].classList.remove('click');
        }
        for (let i = 0; i < elementColor.length; i++) {
            elementColor[i].classList.remove('click1');
        }
        setColor(e.target.id);
        e.target.classList.add('click1');
        e.target.children[0].classList.add('click');
        e.target.children[1].classList.add('click');
    }
    //xy ly click vao button size hien border,icon,background ra
    const handleClickButonSize = (e) => {
        const elementSize = document.querySelectorAll('.container-details-button-size');
        const elementIconSize = document.querySelectorAll('.container-details-button-checked');
        const elementBrgSize = document.querySelectorAll('.container-details-button-color-checked');

        for (let i = 0; i < elementSize.length; i++) {
            elementSize[i].onclick = (e) => {
                for (let i = 0; i < elementIconSize.length; i++) {
                    elementIconSize[i].classList.remove('click');

                }
                for (let i = 0; i < elementBrgSize.length; i++) {
                    elementBrgSize[i].classList.remove('click');

                }
                for (let i = 0; i < elementSize.length; i++) {
                    elementSize[i].classList.remove('click1');
                }
                setSize(e.target.id);
                e.target.classList.add('click1');
                e.target.children[0].classList.add('click');
                e.target.children[1].classList.add('click');
            }
        }
    }

    let settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const productId = products._id;
        const userid = users._id;
        const quantity = number;
        const price = products.price_now;
        const errorElement = document.querySelector('.container__error');
        const errorTiltleElement = document.querySelector('.container__error__title');
        if (color == '' || size == '') {
            errorElement.classList.add('barg');
            errorTiltleElement.classList.add('show');
        } else {
            errorElement.classList.remove('barg');
            errorTiltleElement.classList.remove('show');
            const postAdd = {
                userid,
                productId,
                color,
                size,
                quantity,
                price
            };
            if (e.currentTarget.name == 'submit') {
                postToCart(dispatch, navigate, postAdd);
                getToCart(dispatch, userid);
            } else {
                const showNotification = document.querySelector('.app-chitiet-notifi');
                showNotification.classList.add('show');
                setTimeout(() => {
                    showNotification.classList.remove('show');
                }, 3000);
                postToCart1(dispatch, postAdd);
                getToCart(dispatch, userid);
            }
        }
    }
    return (
        <div>
            <div class="app-chitiet">
                <div class="container-details">
                    <div class="grid-details">
                        <div class="container-details-big">
                            <div class="container-details-big-image">
                                <div class="container-details-image">
                                    <img src={products?.image && `http://localhost:5000/${products.image}`}
                                        alt="" id="container-details-image-img-id" className="container-details-image-img" />
                                </div>
                                <div class="container-details-imge-differenr">
                                    <div class="container-slider-big">
                                        <div className="sliderimage">
                                            <Slider {...settings}>
                                                {products?.imagedetails && products.imagedetails.map(image => {
                                                    return (
                                                        <img src={`http://localhost:5000/${image}`} alt="" className="image__customer" />
                                                    )
                                                })}
                                                <img src="https://file.hstatic.net/1000061481/file/bang_tinh_size_giay_nike-01_04e8dc7953e1405d987f06e46c70ba81_116e6ba1a9344c1ead46290aeffcc961_1024x1024.jpg" alt="" className="image__customer" />
                                            </Slider>
                                        </div>
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
                                            {products?.price_last.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}
                                        </div>
                                    </div>
                                    <div class="container-details-new-price">
                                        <div class="container-details-new-price-text">
                                            <sup>₫</sup>
                                        </div>
                                        <div class="container-details-new-price-number">
                                            {products?.price_now.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}
                                        </div>
                                    </div>
                                    <div class="container-details-sale">{100 - ((products?.price_now * 100) / products?.price_last).toFixed(0)}%&nbsp;GIẢM</div>
                                </div>
                                <div className="container__error">
                                    <div class="container-details-color">
                                        <label class="container-details-color-text">MÀU SẮC</label>
                                        <div class="container-details-color-item">
                                            {products?.attributes.map(product => {
                                                return (
                                                    <button id={product.color._id} className="container-details-button-color"
                                                        onClick={handleClickButonColor}
                                                        checked="checked">
                                                        {product.color.name}
                                                        <i class="fal fa-check container-details-button-focus"
                                                        ></i>
                                                        <div class="container-details-button-color-backg">
                                                        </div>
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div class="container-details-size">
                                        <label class="container-details-size-text">SIZE</label>
                                        <div class="container-details-size-item">
                                            {products?.attributes.map(product => {
                                                return (
                                                    <button id={product.size._id} class="container-details-button-size" onClick={handleClickButonSize} checked="checked">
                                                        {product.size.name}

                                                        <i class="fal fa-check container-details-button-checked"
                                                            onclick="event.stopPropagation()"></i>
                                                        <div class="container-details-button-color-checked"
                                                            onclick="event.stopPropagation()"></div>
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div class="container-details-quantity">
                                        <div class="container-details-quantity-products">
                                            <div class="container-details-quantity-text">Số Lượng</div>
                                            <div class="container-details-quantity-number">
                                                <div class="container-details-quantity-number-quantity">
                                                    <div class="container-details-minus">
                                                        <i class="fal fa-minus container-details-minus-btn" onClick={handleSetNumberSub}></i>
                                                    </div>
                                                    <input type="number" class="container-details-input-text" min="1" max="300"
                                                        value={number} name="quantity" onChange={e => handleNumber(e)} />
                                                    <div class="container-details-minus-btn-btn">
                                                        <i class="fal fa-plus container-details-minus-btn" onClick={handleSetNumberAdd}></i>
                                                    </div>
                                                </div>
                                                <span class="container-details-quantity-number-product"> {products?.quantity} sản phẩm có
                                                    sẵn</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__error__title">Vui lòng chọn Phân loại hàng</div>
                                </div>
                                <form action="" method='post'>
                                    <div class="container-details-button-add">
                                        <button onClick={handleSubmitForm} class="container-details-add" name="addsubmit">
                                            <div class="container-details-add-text">
                                                <i class="fal fa-cart-plus container-details-add-text-icon"></i>Thêm Vào Giỏ
                                                Hàng
                                            </div>
                                        </button>
                                        <div class="container-details-link">
                                            <button onClick={handleSubmitForm} type="submit" name="submit" class="container-details-button-buy">Mua
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
                                        {products?.details}
                                    </span>
                                </div>
                            </div>
                            <div class="container-details-footer-two">
                                <div class="container-details-footer-heading">
                                    MÔ TẢ SẢN PHẨM
                                </div>
                                <div class="container-details-footer-text">
                                    <span class="text-details">
                                        {products?.description}
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
                            <i class="fas fa-check app-chitiet-notifi-icon-color"></i>
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