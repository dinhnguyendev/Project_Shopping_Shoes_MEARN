import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addproducts } from '../../../../../../redux/apiRequest';
import './addproduct.css';
function AddProduct() {
    const [color, setColor] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState({});
    const [price_last, setPricelast] = useState();
    const [price_now, setPricenow] = useState();
    const [details, setDetails] = useState('');
    const [description, setDescription] = useState('');
    //xu ly botoom position: fixed handle color
    useEffect(() => {
        const element = document.querySelector('.add__footer');
        const handleSroll = () => {
            const heights = window.scrollY;
            if (heights > 710) {
                element.classList.add('color');
            } else if (heights < 700) {
                element.classList.remove('color');
            }
            // console.log(heights)
        }
        window.addEventListener('scroll', handleSroll);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();

        // const dispatch = useDispatch();
        // const navigate = useNavigate();
        // addproducts(dispatch, navigate);
        console.log(image);
    }
    return (
        <form action="" method='post' className='add__width' enctype="multipart/form-data">
            <div className='add'>
                <div className="add__big">
                    <div className="add__heading">
                        <div className="add__heading__text">
                            Thêm 1 sản phẩm mới
                        </div>
                        <div className="add__heading__title">Vui lòng chọn ngành hàng phù hợp cho sản phẩm của bạn.</div>
                    </div>
                    <div className="add__product">
                        <div className="add__product__name">
                            <div className="add__product__name__text">Tên sản phẩm:</div>
                            <div className="add__product__name__input">
                                <input type="text" onChange={e => setName(e.target.value)} className="add__product__name__input__text" />
                                <span className="add__product__name__input__hr"></span>
                                <div className="add__product__name__input__number">25/120</div>
                            </div>
                        </div>
                        <div className="add__product__category">
                            <div className="add__product__category__big">
                                <ul className="add__product__category__list__parent">
                                    <li className="add__product__category__item">
                                        <div className="add__product__category__text">Thời Trang Nam</div>
                                        <i class="fa-solid fa-angle-right add__product__category__icon"></i>
                                    </li>
                                    <li className="add__product__category__item">
                                        <div className="add__product__category__text">Thời Trang Nam</div>
                                        <i class="fa-solid fa-angle-right add__product__category__icon"></i>
                                    </li>
                                </ul>
                                <ul className="add__product__category__list__children">
                                    <li className="add__product__category__item">
                                        <div className="add__product__category__text">Thời Trang Nam</div>
                                    </li>
                                    <li className="add__product__category__item">
                                        <div className="add__product__category__text">Thời Trang Nam</div>
                                    </li>
                                </ul>
                                <div className="empty"></div>
                            </div>
                            <div className="add__product__check">
                                <div className="add__product__check__text">Đã chọn :</div>
                                <div className="add__product__check__name">
                                    <div className="add__product__check__name__parent">Thời Trang Nam  </div>
                                    <div className="add__product__check__name__children"><i class="fa-solid fa-angle-right add__icon"></i>   Hoodie va Áo nỉ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add__information">
                <div className="add__information__heading">
                    Thông tin cơ bản
                </div>
                <div className="add__information__product">
                    <div className="add__information__product__flex">
                        <div className="add__information__product__heading">Hình ảnh sản phẩm</div>
                        <div className="add__information__product__container">
                            <div className="add__information__product__content">
                                <div className="add__information__product__input">
                                    <i class="fa-solid fa-plus add__information__product__icon"></i>
                                    <input type="file" name='image' onChange={e => setImage(e.target.files)} className="add__information__product__file" />
                                </div>
                            </div>
                            <div className="add__information__product__text">Ảnh bìa</div>
                        </div>
                    </div>
                    <div className="add__information__product__flex">
                        <div className="add__information__product__heading">Hình ảnh sản phẩm</div>
                        <div className="add__information__product__container">
                            <div className="add__information__product__content">
                                <div className="add__information__product__input">
                                    <i class="fa-solid fa-plus add__information__product__icon"></i>
                                    <input type="file" name='imagedetails' onChange={e => setImagedetails(e.target.files)} className="add__information__product__file" multiple />
                                </div>
                            </div>
                            <div className="add__information__product__text">Ảnh chi tiết</div>
                        </div>
                    </div>
                    <div className="add__information__price">
                        <div className="add__information__price__flex">
                            <div className="add__information__product__heading">Giá</div>
                            <div className="add__information__price__container">
                                <div className="add__information__price__item">
                                    <div className="add__information__price__item__heading">₫</div>
                                    <span className="add__information__price__item__hr"></span>
                                    <input type="number" placeholder='Giá cũ' onChange={e => setPricelast(e.target.value)} className="add__information__price__input" />
                                </div>
                            </div>
                            <div className="add__information__price__container">
                                <div className="add__information__price__item">
                                    <div className="add__information__price__item__heading">₫</div>
                                    <span className="add__information__price__item__hr"></span>
                                    <input type="number" onChange={e => setPricenow(e.target.value)} placeholder='Giá mới' className="add__information__price__input" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add__information__color">
                        <div className="add__information__color__flex">
                            <div className="add__information__product__heading">Kích thước</div>
                            <div className="add__information__color__size">
                                <div className="add__information__color__heading">Color :</div>
                                <select name="" id="" className="add__information__color__list">
                                    <option value="" className="add__information__color__list__item">DO</option>
                                    <option value="" className="add__information__color__list__item">XANH</option>
                                    <option value="" className="add__information__color__list__item">XANH</option>
                                    <option value="" className="add__information__color__list__item">XANH</option>
                                </select>
                            </div>
                            <div className="add__information__color__size">
                                <div className="add__information__color__heading">size :</div>
                                <select name="" id="" className="add__information__color__list">
                                    <option value="" className="add__information__color__list__item">DO</option>
                                    <option value="" className="add__information__color__list__item">XANH</option>
                                    <option value="" className="add__information__color__list__item">XANH</option>
                                    <option value="" className="add__information__color__list__item">XANH</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="add__information__decription">
                        <div className="add__information__decription__flex">
                            <div className="add__information__product__heading">
                                *Mô tả sản phẩm
                            </div>
                            <div className="add__information__decription__content">
                                <textarea name="" id="" className='add__information__decription__textarea' minrows="9" maxrows="26"></textarea>
                            </div>
                        </div>
                        <div className="add__information__decription__number">0/3000</div>
                    </div>
                </div>
            </div>
            <div className="add__footer">
                <div className="add__footer__flex">
                    <div className="add__footer__item">
                        <button onClick={handleSubmit} className="add__footer__button">Thêm sản phẩm</button>
                    </div>
                </div>
            </div>

        </form>

    );
}

export default AddProduct;