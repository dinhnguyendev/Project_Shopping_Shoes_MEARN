import React from 'react';
import { Link } from 'react-router-dom';
import './successPage.css';
function SuccessPage() {
    return (
        <div className="success">
            <div className="success__flex">
                <div className="success__item">
                    <div className="success__item__icon">
                        <i class="fal fa-ballot-check"></i>
                    </div>
                    <div className="success__item__text">Đặt hàng thành công</div>
                </div>
                <div class="success__notification">
                    Cùng PAN bảo vệ quyền lợi của bạn - chỉ nhận hàng <br /> thanh toán khi đơn hàng ở trạng thái "Đang
                    giao
                    hàng".
                </div>
                <div className="success__link">
                    <Link to="/" className="success__link__home">
                        <div className="success__link__order__icon"><i class="fal fa-home"></i></div>
                        <div className="success__link__home__heading">Trang chủ</div>
                    </Link>
                    <Link to="/account/purchase" className="success__link__order">
                        <div className="success__link__order__icon" ><i class="fal fa-box-check"></i></div>
                        <div className="success__link__order__heading">Đơn hàng</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;