import React, { useEffect } from 'react';
import './navbar.css';
function Navbar() {
    useEffect(() => {
        const element = document.querySelectorAll('.order__header__item__heading');
        const removelement = document.querySelectorAll('.order__header__animation');
        for (var i = 0; i < element.length; i++) {
            element[i].onclick = function (e) {
                for (var i = 0; i < removelement.length; i++) {
                    removelement[i].classList.remove('block');
                }
                for (var i = 0; i < element.length; i++) {
                    element[i].classList.remove('color');
                }
                e.currentTarget.classList.add('color');
                e.path[1].children[1].classList.add('block');
            }
        }
    }, [])
    return (

        <div className="order">
            <div className="order__header">
                <div className="order__header__item">
                    <div className="order__header__item__heading">Tất&nbsp;cả</div>
                    <div className="order__header__animation"></div>
                </div>
                <div className="order__header__item">
                    <div className="order__header__item__heading">Chờ&nbsp;xác&nbsp;nhận</div>
                    <div className="order__header__animation"></div>
                </div>
                <div className="order__header__item">
                    <div className="order__header__item__heading">Đang&nbsp;giao</div>
                    <div className="order__header__animation"></div>
                </div>
            </div>
        </div>

    );
}
export default Navbar;