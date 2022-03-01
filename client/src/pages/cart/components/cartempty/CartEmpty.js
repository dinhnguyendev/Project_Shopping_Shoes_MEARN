import './cartEmpty.css';

function CartEmpty() {
    return (
        <div class="grid-image-empty">
            <div class="cart-empty-image">
                <div class="cart-empty-big">
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f49e36beaf32db.png" alt="" class="cart-empty-img" />

                </div>
                <div class="cart-empty-text">Giỏ hàng của bạn còn trống</div>
            </div>
        </div>
    );
}

export default CartEmpty;