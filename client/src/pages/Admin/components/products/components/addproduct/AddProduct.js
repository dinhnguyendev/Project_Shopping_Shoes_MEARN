import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addproducts, getnavbarTrademarkDetails } from '../../../../../../redux/apiRequest';
import * as ReactDOM from 'react-dom';
import './addproduct.css';
function AddProduct() {
    const navbar = useSelector(state => state.navbar.getnavbar?.navbarData);
    const navbarDetail = useSelector(state => state.navbar.getnavbarTrademarkDetails?.navbarData);
    const trademark = useSelector(state => state.navbar.getnavbarTrademark?.navbarData);
    const [color, setColor] = useState('');
    // console.log(navbarDetails);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [categorytitle, setCategorytitle] = useState('');
    const [trademarks, setTrademarks] = useState('');
    const [trademarkstitle, setTrademarkstitle] = useState('');
    const [trademarkDetails, setTrademarkDetails] = useState('');
    const [trademarkDetailstitle, setTrademarkDetailstitle] = useState('');
    const [image, setImage] = useState();
    const [imageDetails, setImageDetails] = useState();
    const [avatarDetails, setAvartarDetails] = useState([]);
    const [avatar, setAvatar] = useState();
    const [price_last, setPricelast] = useState();
    const [price_now, setPricenow] = useState();
    const [details, setDetails] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
    const handleCategory = (e) => {
        e.stopPropagation();
        const elementCategory = document.querySelectorAll('.add__product__category__item');
        for (let i = 0; i < elementCategory.length; i++) {
            elementCategory[i].classList.remove("brg");
        }
        ReactDOM.findDOMNode(e.target).parentNode.classList.add('brg');
        setCategory(e.target.id);
        setCategorytitle(e.target.title);
    }
    const handleTrademark = (e) => {
        e.stopPropagation();
        const elementTrademark = document.querySelectorAll('.add__product__category__text');
        for (let i = 0; i < elementTrademark.length; i++) {
            elementTrademark[i].classList.remove("brg");
        }
        e.target.classList.add('brg');
        setTrademarks(e.target.id);
        setTrademarkstitle(e.target.title);

    }
    useLayoutEffect(() => {
        console.log(trademarks);
        const idtrademark = trademarks.trim();
        getnavbarTrademarkDetails(dispatch, navigate, idtrademark);
    }, [trademarks]);
    const handleTrademarkDetails = (e) => {
        e.stopPropagation();
        const elementTrademarkDetails = document.querySelectorAll('.add__product__category__text__children');
        for (let i = 0; i < elementTrademarkDetails.length; i++) {
            elementTrademarkDetails[i].classList.remove("brg");
        }
        e.target.classList.add('brg');
        setTrademarkDetails(e.target.id);
        setTrademarkDetailstitle(e.target.title);
    }
    const handleImage = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImage(file);
        setAvatar(file);
    }
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);
    const handleImageDetails = (e) => {
        const file = e.target.files;
        const arr = [];
        for (let i = 0; i < file.length; i++) {
            // file[i].preview = URL.createObjectURL(file[i]);
            arr.push(URL.createObjectURL(file[i]));
        }
        setAvartarDetails(arr);
        setImageDetails(file);
        // console.log();
    }
    useEffect(() => {
        return () => {
            for (let i = 0; i < avatarDetails.length; i++) {
                // console.log("asdasd");
                // console.log(imageDetails[i]);
                const fileitem = imageDetails[i];
                fileitem && URL.revokeObjectURL(fileitem.preview);
            }
        }
    }, [imageDetails]);

    console.log(imageDetails && imageDetails.length);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name != '' && price_now != '' &&
            price_last != '' && details != '' &&
            description != '' && category && trademarks != ''
            && trademarkDetails != '' && image != null && imageDetails != null) {
            // const dataSubmit = {
            //     name,
            //     price_now,
            //     price_last,
            //     details,
            //     description,
            //     category,
            //     trademark: trademarks,
            //     trademarkdetails: trademarkDetails,
            // }
            const imagedetails = imageDetails;
            const formData = new FormData();
            formData.append('image', image);
            formData.append('name', name);
            formData.append('price_now', price_now);
            formData.append('price_last', price_last);
            formData.append('details', details);
            formData.append('description', description);
            formData.append('category', category);
            formData.append('trademark', trademarks);
            formData.append('trademarkdetails', trademarkDetails);
            for (let i = 0; i < imagedetails.length; i++) {
                formData.append("imagedetails", imagedetails[i]);
            }
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            }
            addproducts(dispatch, navigate, formData, config);
            alert("Thêm sản phẩm Thành công");
        } else {
            alert("Bạn chưa điền đầy đủ thông tin.");
        }



    }
    return (
        <form action="http://localhost:5000/products/add" onSubmit={handleSubmit} method='POST' className='add__width' enctype="multipart/form-data">
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
                                <input type="text" name='name' onChange={e => setName(e.target.value)} className="add__product__name__input__text" />
                                <span className="add__product__name__input__hr"></span>
                                <div className="add__product__name__input__number">{name.length}/120</div>
                            </div>
                        </div>
                        <div className="add__product__category">
                            <div className="add__product__category__big">
                                <ul className="add__product__category__list__parent">
                                    {navbar?.map(navbars => {
                                        return (
                                            <li className="add__product__category__item">
                                                <div onClick={handleCategory} id={navbars._id} title={navbars.name} className="add__product__category__text">{navbars.name}</div>
                                                <i class="fa-solid fa-angle-right add__product__category__icon"></i>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <ul className="add__product__category__list__children">
                                    {trademark?.map(trademarks => {
                                        return (
                                            <li className="add__product__category__item">
                                                <div onClick={handleTrademark} id={trademarks._id} title={trademarks.name} className="add__product__category__text">{trademarks.name}</div>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <ul className="add__product__category__list__children">
                                    {navbarDetail && navbarDetail?.map(navbarDetails => {
                                        return (
                                            <li className="add__product__category__item">
                                                <div onClick={handleTrademarkDetails} id={navbarDetails._id} title={navbarDetails.name} className="add__product__category__text__children">{navbarDetails.name}</div>
                                            </li>
                                        )
                                    })}
                                </ul>
                                {/* <div className="empty"></div> */}
                            </div>
                            <div className="add__product__check">
                                <div className="add__product__check__text">Đã chọn :</div>
                                <div className="add__product__check__name">
                                    <div className="add__product__check__name__parent">{categorytitle && categorytitle + "    >  "}  </div>
                                    <div className="add__product__check__name__children">{trademarkstitle && trademarkstitle + "    >   "}</div>
                                    <div className="add__product__check__name__children">{trademarkDetailstitle && trademarkDetailstitle + " ."}</div>
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
                                    <input type="file" name="image" onChange={handleImage} className="add__information__product__file" />
                                </div>
                            </div>
                            <div className="add__information__product__text">Ảnh bìa</div>
                        </div>
                        {
                            avatar &&
                            <div className="add__information__product__input__show">
                                <img src={avatar.preview} alt="" className="add__information__product__input__img" />
                            </div>
                        }
                    </div>
                    <div className="add__information__product__flex">
                        <div className="add__information__product__heading">Hình ảnh sản phẩm</div>
                        <div className="add__information__product__container">
                            <div className="add__information__product__content">
                                <div className="add__information__product__input">
                                    <i class="fa-solid fa-plus add__information__product__icon"></i>
                                    <input type="file" name='imagedetails' onChange={handleImageDetails} className="add__information__product__file" multiple />
                                </div>
                            </div>
                            <div className="add__information__product__text">Ảnh chi tiết</div>
                        </div>
                        <div className="add__information__product__input__flex">
                            {avatarDetails && avatarDetails.map(avatarDetailss => {
                                return (
                                    <img src={avatarDetailss} alt="" className="add__information__product__input__img" />
                                )
                            })}
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

                    <div className="add__information__decription">
                        <div className="add__information__decription__flex">
                            <div className="add__information__product__heading">
                                *Mô tả sản phẩm
                            </div>
                            <div className="add__information__decription__content">
                                <textarea name="" onChange={e => setDetails(e.target.value)} id="" className='add__information__decription__textarea' minrows="9" maxrows="26"></textarea>
                            </div>
                        </div>
                        <div className="add__information__decription__number">{details.length}/3000</div>
                    </div>
                    <div className="add__information__decription">
                        <div className="add__information__decription__flex">
                            <div className="add__information__product__heading">
                                *Chi tiết sản phẩm
                            </div>
                            <div className="add__information__decription__content">
                                <textarea name="" onChange={e => setDescription(e.target.value)} id="" className='add__information__decription__textarea' minrows="9" maxrows="26"></textarea>
                            </div>
                        </div>
                        <div className="add__information__decription__number">{details.length}/3000</div>
                    </div>
                </div>
            </div>
            <div className="add__footer">
                <div className="add__footer__flex">
                    <div className="add__footer__item">
                        <button type='submit' className="add__footer__button">Thêm sản phẩm</button>
                    </div>
                </div>
            </div>
        </form>

    );
}

export default AddProduct;