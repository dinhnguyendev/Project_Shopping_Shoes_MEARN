
import './collection.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Collection() {
    const products = useSelector(state => state.products.product?.allproduct);
    return (
        <div>
            <div class="home__gird__colum__10">
                {/* <div class="home__container__sort">
                    <div class="home__container__sort__list">
                        <div class="home__container__sort__heading">sắp xếp theo</div>
                        <div class="home__container__sort__item">
                            <div class="home__container__sort__button">phổ biến</div>
                        </div>
                        <div class="home__container__sort__item">
                            <div class="home__container__sort__button">mới nhất</div>
                        </div>
                        <div class="home__container__sort__item">
                            <div class="home__container__sort__button">bán chạy</div>
                        </div>
                        <div class="home__container__sort__item__price">
                            <div class="home__container__sort__button__price">
                                <span>giá</span>
                                <i class="far fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div class="home__container__body">
                    <div class="home__container__body__flex">
                        <div class="home__container__body__big">
                            {products?.map((product) => (
                                <Link to={`/products/${product.slug}`} key={product._id} class="home__container__body__link">
                                    <div class="home__container__body__item">
                                        <div class="home__container__body__image">
                                            <img src={`http://localhost:5000/${product.image}`}
                                                alt="" class="home__container__body__img" />
                                            <div class="home__container__bg">
                                                <h1 class="home__container__bg__title">nike</h1>
                                            </div>
                                        </div>
                                        <div class="home__position__love">yêu thích +</div>
                                        {/* <div class="home__position__sale">
                                            <span class="home__position__sale__number">55%</span>
                                            <span class="home__position__sale__text">Giảm</span>
                                        </div> */}
                                        <div class="home__container__body__content">
                                            <div class="home__container__body__heading">
                                                {product.name}
                                            </div>
                                            <div class="home__container__body__price">
                                                <div class="home__container__body__price__flex">
                                                    <div class="home__container__body__flex__price">
                                                        <div class="home__container__body__price__last">
                                                            ₫{product.price_last.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}
                                                        </div>
                                                        <div class="home__container__body__price__now">
                                                            <span class="money">đ</span>{product.price_now.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}
                                                        </div>
                                                    </div>
                                                    <div class="home__container__body__flex__icon">
                                                        <div class="home__container__body__price__icon">
                                                            <i class="fas fa-truck"></i>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div class="home__container__body__icon">
                                                <div class="home__container__body__icon__flex">
                                                    <div class="home__container__body__icon__like">
                                                        <i
                                                            class="fas fa-heart home__container__body__icon__like__brg"></i>
                                                    </div>
                                                    <div class="home__container__body__icon__content">
                                                        <div class="home__container__body__icon__start">
                                                            <i class="fas fa-star home__icon__start"></i>
                                                            <i class="fas fa-star home__icon__start"></i>
                                                            <i class="fas fa-star home__icon__start"></i>
                                                            <i class="fas fa-star home__icon__start"></i>
                                                            <i class="fas fa-star"></i>
                                                        </div>
                                                        <div class="home__container__body__icon__text">
                                                            <div class="home__container__body__sell">
                                                                Đã bán 5,1k
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="home__container__shop">
                                                <div class="home__container__body__shop">
                                                    pan
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            )
                            )}







                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
};
export default Collection;