
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNumberCart, checkeds, deleteCart, getToCart, setDefaultChecked, uncheckeds } from '../../../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import './cart.css';
function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.login?.currentUser);
    const userid = user?._id;

    const [number, setNumber] = useState([]);
    const [checked, setChecked] = useState([]);
    // const [price, setPrice] = useState(Number);


    const cart = useSelector(state => state.cart.getcart?.currentCart);
    const handleInputNumberCart = (e) => {
        console.log(e)
    }
    const handlenumber = index => e => {
        let newArr = [...number];
        newArr[index] = e.target.value;
        setNumber(newArr);
    }
    const handlenumberSubmit = index => e => {
        const quantity = e.target.value;
        const numbers = Number(quantity);
        ReactDOM.findDOMNode(e.target).parentNode.childNodes[1].classList.add("block");
        addNumberCart(dispatch, userid, index, numbers);
        ReactDOM.findDOMNode(e.target).parentNode.childNodes[1].classList.remove("block");
    }
    const handleAddCart = index => e => {
        const numbers = Number(number[index]) + 1;
        let newArr = [...number];
        newArr[index] = numbers;
        setNumber(newArr);
        ReactDOM.findDOMNode(ReactDOM.findDOMNode(e.target).parentNode).parentNode.childNodes[2].childNodes[1].classList.add("block");
        addNumberCart(dispatch, userid, index, numbers);
        ReactDOM.findDOMNode(ReactDOM.findDOMNode(e.target).parentNode).parentNode.childNodes[2].childNodes[1].classList.remove("block");

    }
    const handleSubCart = index => e => {
        const quantity = Number(number[index]);
        if (quantity > 1) {
            const numbers = Number(number[index]) - 1;
            let newArr = [...number];
            newArr[index] = numbers;
            setNumber(newArr);
            ReactDOM.findDOMNode(ReactDOM.findDOMNode(e.target).parentNode).parentNode.childNodes[2].childNodes[1].classList.add("block");
            addNumberCart(dispatch, userid, index, numbers);
            ReactDOM.findDOMNode(ReactDOM.findDOMNode(e.target).parentNode).parentNode.childNodes[2].childNodes[1].classList.remove("block");

        }
    }
    const handleDeleteCart = productid => e => {
        console.log(productid);
        if (confirm("Bạn có chắc muốn xóa sản phẩm này") == true) {
            deleteCart(dispatch, userid, productid);
            getToCart(dispatch, userid);
        }
    }
    useEffect(() => {
        setDefaultChecked(dispatch, navigate, userid);
    }, [])
    const handleCheck = e => {
        let updatedList = [...checked];
        if (e.target.checked) {
            updatedList = [...checked, Number(e.target.value)];
            checkeds(dispatch, navigate, e.target.value, userid);
            // const prices = Number(ReactDOM.findDOMNode(e.target).parentNode.parentNode.children[5].children[0].title);
            // total = price + prices;
        } else {
            updatedList.splice(checked.indexOf(Number(e.target.value)), 1);
            // const prices = Number(ReactDOM.findDOMNode(e.target).parentNode.parentNode.children[5].children[0].title);
            // total = price - prices;
            uncheckeds(dispatch, navigate, e.target.value, userid);
        }
        setChecked(updatedList);
    }
    const handleSubmit = () => {
        if (checked.length > 0) {
            navigate("/pay");
        } else {
            alert("Bạn chưa chọn sản phẩm");
        }
    }
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

                            <form action="" method='post'>
                                {cart?.map((carts, index) => (
                                    <div key={carts._id} div class="container-cart-details-products" >
                                        <div class="container-cart-details-products-input">
                                            <input type="checkbox" onChange={handleCheck} name="" value={index} class="container-cart-details-products-input-check" />
                                        </div>
                                        <div class="container-cart-details-products-product">
                                            <div class="container-cart-details-products-product-big">
                                                <div class="container-cart-details-products-product-item1">
                                                    <a href="" class="container-cart-details-products-link1">
                                                        <div class="container-cart-details-products-image">
                                                            <img src={`http://localhost:5000/${carts.productId.image}`}
                                                                alt="" class="container-cart-details-products-img" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="container-cart-details-products-product-item2">
                                                    <a href="" class="container-cart-details-products-link2">
                                                        <div class="container-cart-details-products-text">
                                                            {carts.productId.name}
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
                                                    <div class="container-cart-details-products-color">{carts.color.name}</div>
                                                    <div class="container-cart-details-products-space">,</div>
                                                    <div class="container-cart-details-products-size">{carts.size.name}</div>
                                                    <div class="container-cart-details-products-daucham">.</div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="container-cart-details-products-price">
                                            <div class="container-cart-details-products-price-big">
                                                <div class="container-cart-details-products-price-last">₫{carts.productId.price_last.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
                                                <div class="container-cart-details-products-price-now">₫{carts.productId.price_now.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
                                            </div>
                                        </div>
                                        <div class="container-cart-details-products-number">
                                            <div class="container-details-quantity-products">
                                                <div class="container-details-quantity-number-quantity">
                                                    <div class="container-details-minus" >
                                                        <i id={index} onClick={handleSubCart(index)} class="fal fa-minus container-details-minus-btn-a"></i>
                                                    </div>

                                                    <div className="" style={{ display: "none" }}>{number.push(carts.quantity)}</div>
                                                    <div className="container__input">
                                                        <input type="number"
                                                            class="container-details-input-text"
                                                            value={number[index]} onChange={handlenumber(index)} onBlur={handlenumberSubmit(index)} />
                                                        <span className="conatiner__before__input"></span>
                                                    </div>
                                                    <div class="container-details-minus-btn-btn">
                                                        <i id={index} onClick={handleAddCart(index)} class="fal fa-plus container-details-minus-btn"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container-cart-details-products-money">
                                            <div title={carts.productId.price_now * Number(number[index])} class="container-cart-details-products-money-number">
                                                ₫{(carts.productId.price_now * Number(number[index])).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                            </div>
                                        </div>
                                        <div class="container-cart-details-products-operation">
                                            <div class="container-cart-details-products-operation-item">
                                                <div id={carts._id} onClick={handleDeleteCart(carts._id)} class="container-cart-details-products-delete">Xóa</div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </form>


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
                                                Tổng thanh toán ({checked.length} Sản phẩm):
                                            </div>
                                            <div class="container-cart-details-buy-sum-number">
                                                ₫0
                                            </div>
                                        </div>
                                        <div class="container-cart-details-buy-button">
                                            <button onClick={handleSubmit} class="container-cart-details-buy-btn" name="submitlink">Mua hàng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Cart;