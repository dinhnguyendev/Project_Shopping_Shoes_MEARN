import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteProduct, getproducts } from '../../../../../../redux/apiRequest';
import './allProduct.css';
const AllProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const slug = "all";
        getproducts(dispatch, navigate, slug);
    }, []);
    const product = useSelector(state => state.products.product?.allproduct);
    const handleDetailsProducts = (e) => {
        const element = document.querySelectorAll('.activity__details');
        const elementBrg = document.querySelectorAll('.activity_details__icon');
        for (let i = 0; i < element.length; i++) {
            element[i].classList.remove('show');
        }
        for (let i = 0; i < elementBrg.length; i++) {
            elementBrg[i].classList.remove('brg_color');
        }
        e.target.classList.add('brg_color');
        e.target.offsetParent.children[1].classList.add('show');
    }
    const handleBack = (e) => {
        e.target.offsetParent.offsetParent.children[0].children[3].children[0].classList.remove('brg_color');
        e.target.offsetParent.classList.remove('show');
        // console.log(e.target.offsetParent.offsetParent.children[0].children[3].children[0]);
    }
    const handleNavigateAddSize = (e) => {
        const slug = e.target.id;
        navigate(`../adddetails/${slug}`);
    }
    const handleNavigateFix = (e) => {
        const slug = e.target.id;
        navigate(`../fix/${slug}`);
    }
    const handleDeleteProduct = async (e) => {
        if (confirm("Bạn có chắc muốn xóa ?") == true) {
            const slug = e.target.id;
            const id = e.target.title;
            const res = await axios.post('http://localhost:5000/order/checkdelete', { id })
            if (res.data == null) {
                await deleteProduct(dispatch, slug);
                const slugall = "all";
                await getproducts(dispatch, navigate, slugall);
                alert("Xóa thành công");
            } else {
                alert("Sản phẩm đã tồn tại trong giỏ hàng !");
            }
        }
    }
    return (
        <div>
            <div class="container-big">
                <div class="container-conatiner">
                    <div class="container-see">
                        <div class="container-see-big">
                            <div class="container-see-heading-name">tên sản phẩm</div>
                            <div class="container-see-heading-price">giá</div>
                            <div class="container-see-heading-quantity">số lượng </div>
                            <div class="container-see-heading-details">hoạt động</div>
                        </div>
                        {product?.map(products => {
                            return (
                                <div class="container-see-products">
                                    <div class="container-see-data">
                                        <div class="container-see-data-name">{products.name}
                                        </div>
                                        <div class="container-see-data-price">{products.price_now.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</div>
                                        <div class="container-see-data-quantity">{products.quantity}</div>
                                        <div className="container-see-data__activity">
                                            <i class="fal fa-info-circle activity activity_details__icon" onClick={handleDetailsProducts} title='chi tiết'>
                                            </i>
                                            <i id={products.slug} onClick={handleNavigateAddSize} class="fal fa-plus-circle activity" title='thêm size'></i>
                                            <i id={products.slug} onClick={handleNavigateFix} class="fal fa-comment-edit activity" title='sửa'></i>
                                            <i id={products.slug} title={products._id} onClick={handleDeleteProduct} class="fas fa-ban activity" ></i>
                                        </div>
                                    </div>
                                    <div className="activity__details">
                                        <div className="activity__details__content">
                                            <div className="activity__details__name">{products.name}</div>
                                            <div className="activity__details__info">
                                                <div className="activity__details__item">
                                                    <div className="activity__details__item__flex">
                                                        <div className="activity__details__list">
                                                            <div className="activity__details__texts">Giá cũ:</div>
                                                            <div className="activity__details__numbers">{products.price_last.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</div>
                                                        </div>
                                                        <div className="activity__details__list">
                                                            <div className="activity__details__texts">Giá mới:</div>
                                                            <div className="activity__details__numbers">{products.price_now.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</div>
                                                        </div>
                                                        <div className="activity__details__list">
                                                            <div className="activity__details__texts">Số lượng :</div>
                                                            <div className="activity__details__number">{products.quantity}</div>
                                                        </div>
                                                    </div>
                                                    <div className="activity__details__catogory">
                                                        <div className="activity__details__text">Loại sân :</div>
                                                        <div className="activity__details__number">{products.category.name}</div>
                                                    </div>
                                                    <div className="activity__details__catogory">
                                                        <div className="activity__details__text">Thương hiệu :</div>
                                                        <div className="activity__details__number">{products.trademark.name}</div>
                                                    </div>
                                                    <div className="activity__details__catogory">
                                                        <div className="activity__details__text">Loại giày :</div>
                                                        <div className="activity__details__number">{products.trademarkdetails.name}</div>
                                                    </div>
                                                    <div className="activity__details__button">
                                                        <button onClick={handleBack} className="activity__details__button__back">Trở lại</button>
                                                    </div>
                                                </div>
                                                <div className="activity__details__image">
                                                    <img src={`http://localhost:5000/${products.image}`} className="activity__details__img" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>



                                </div>
                            )
                        })}


                    </div>
                </div>




            </div>
        </div>
    );
};

export default AllProduct;