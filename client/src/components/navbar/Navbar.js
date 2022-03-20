import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { getnavbarcategory, getproducts } from '../../redux/apiRequest';
import './navbar.css';

function Navbar() {
    const navbar = useSelector(state => state.navbar.getnavbar?.navbarData);
    console.log(navbar)
    const handleNavbar = () => {
        const { slug } = useParams();
        console.log(slug);
        const dispatch = useDispatch();
        const navigate = useNavigate();
        getproducts(dispatch, navigate, slug);
    }
    return (
        <div class="home__gird__colum__2">
            <div class="home__navbar">
                <div class="home__navbar__category">
                    <div class="home__navbar__heading">
                        <div class="home__navbar__icon">
                            <i class="fas fa-list-ul"></i>
                        </div>
                        <div class="home__navbar__text">
                            tất cả sản phẩm
                        </div>
                    </div>
                    <div class="home__navbar__list">
                        {navbar.map((categorys) => (
                            <Link onClick={handleNavbar} to={`/collection/${categorys?._id}`} key={categorys?._id} class="home__navbar__list__item">{categorys?.name}</Link>
                        ))}
                        {/* <a href="" class="home__navbar__list__item">giày cỏ tự nhiên</a>
                        <a href="" class="home__navbar__list__item">giày cỏ nhân tạo</a>
                        <a href="" class="home__navbar__list__item">giày futsal</a>
                        <a href="" class="home__navbar__list__item">giày đá banh nike</a>
                        <a href="" class="home__navbar__list__item">giày đá banh adidas</a>
                        <a href="" class="home__navbar__list__item">giày đá banh mizuno</a>
                        <a href="" class="home__navbar__list__item">giày đá banh asics</a>
                        <a href="" class="home__navbar__list__item">giày đá banh kamito</a>
                        <a href="" class="home__navbar__list__item home__navbar__list__item__add">phụ kiện bóng
                            đá</a> */}
                    </div>
                </div>
                <div class="home__navbar__search">
                    <div class="home__navbar__search__heading">
                        tìm theo
                    </div>
                    <div class="home__navbar__search__container">
                        <div class="home__navbar__search__text">
                            thương hiệu
                        </div>
                        <div class="home__navbar__search__list">
                            <div class="home__navbar__search__item">
                                <input id="checked" name=""
                                    class="home__navbar__search__item__input  home__navbar__input" type="radio" />
                                <label class="home__navbar__search__item__label" for="checked">nike</label>
                            </div>
                            <div class="home__navbar__search__item">
                                <input class="home__navbar__search__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__search__item__label" for="checked">adidas</label>
                            </div>
                            <div class="home__navbar__search__item">
                                <input class="home__navbar__search__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__search__item__label" for="nike">puma</label>
                            </div>
                            <div class="home__navbar__search__item">
                                <input class="home__navbar__search__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__search__item__label" for="nike">mizuno</label>
                            </div>
                            <div class="home__navbar__search__item">
                                <input class="home__navbar__search__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__search__item__label" for="nike">asics</label>
                            </div>
                            <div class="home__navbar__search__item">
                                <input class="home__navbar__search__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__search__item__label" for="nike">kamito</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home__navbar__price">
                    <div class="home__navbar__price__heading">
                        giá
                    </div>
                    <div class="home__navbar__price__container">
                        <div class="home__navbar__price__list">
                            <div class="home__navbar__price__list__item">
                                <input class="home__navbar__price__list__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__price__list__item__label" for="">ALL</label>
                            </div>
                            <div class="home__navbar__price__list__item">
                                <input class="home__navbar__price__list__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__price__list__item__label" for="">0 Đ ~ 1.000.000
                                    Đ</label>
                            </div>
                            <div class="home__navbar__price__list__item">
                                <input class="home__navbar__price__list__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__price__list__item__label" for="">1.000.000 Đ ~
                                    2.000.000 Đ</label>
                            </div>
                            <div class="home__navbar__price__list__item">
                                <input class="home__navbar__price__list__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__price__list__item__label" for="">2.000.000 Đ ~
                                    3.000.000 Đ</label>
                            </div>
                            <div class="home__navbar__price__list__item">
                                <input class="home__navbar__price__list__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__price__list__item__label" for="">3.000.000 Đ ~
                                    5.000.000 Đ</label>
                            </div>
                            <div class="home__navbar__price__list__item">
                                <input class="home__navbar__price__list__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__price__list__item__label" for="">Trên 5.000.000
                                    Đ</label>
                            </div>
                        </div>
                    </div>
                    <div class="home__navbar__size">
                        <div class="home__navbar__size__heading">size</div>
                        <div class="home__navbar__size__container">
                            <div class="home__navbar__size__list__item">
                                <input class="home__navbar__size__list__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__size__list__item__label" for="">27
                                </label>
                            </div>
                            <div class="home__navbar__size__list__item">
                                <input class="home__navbar__size__list__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__size__list__item__label" for="">27
                                </label>
                            </div>
                            <div class="home__navbar__size__list__item">
                                <input class="home__navbar__size__list__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__size__list__item__label" for="">27
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="home__navbar__color">
                        <div class="home__navbar__color__heading">màu sắc</div>
                        <div class="home__navbar__color__container">
                            <div class="home__navbar__color__list__item">
                                <input class="home__navbar__color__list__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__color__list__item__label" for="">xám
                                </label>
                            </div>
                            <div class="home__navbar__color__list__item">
                                <input class="home__navbar__color__list__item__input home__navbar__input"
                                    type="radio" />
                                <label class="home__navbar__color__list__item__label" for="">đen
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Navbar;