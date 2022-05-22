import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FixProductAll, FixProductImage, FixProductImageDetails, FixProductNoImage, getnavbarTrademarkDetails, getProductFix } from '../../../../../../redux/apiRequest';
import * as ReactDOM from 'react-dom';
import './fixProduct.css';
function FixProduct() {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        getProductFix(dispatch, slug);
    }, [slug]);
    const product = useSelector(state => state.products.fixproducts?.products);
    console.log(product);
    const navbar = useSelector(state => state.navbar.getnavbar?.navbarData);
    const navbarDetail = useSelector(state => state.navbar.getnavbarTrademarkDetails?.navbarData);
    const trademark = useSelector(state => state.navbar.getnavbarTrademark?.navbarData);
    const [color, setColor] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [categorytitle, setCategorytitle] = useState('');
    const [trademarks, setTrademarks] = useState('');
    const [trademarkstitle, setTrademarkstitle] = useState('');
    const [trademarkDetails, setTrademarkDetails] = useState('');
    const [trademarkDetailstitle, setTrademarkDetailstitle] = useState('');
    const [image, setImage] = useState();
    const [imageDetails, setImageDetails] = useState([]);
    const [avatarDetails, setAvartarDetails] = useState([]);
    const [avatarDetailsImage, setAvartarDetailsImage] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [price_last, setPricelast] = useState();
    const [price_now, setPricenow] = useState();
    const [details, setDetails] = useState('');
    const [description, setDescription] = useState('');
    useLayoutEffect(() => {
        setName(product?.name);
        setPricenow(product?.price_now);
        setPricelast(product?.price_last);
        setDescription(product?.description);
        setDetails(product?.details);
        setTrademarks(product?.trademark);
        setCategory(product?.category);
        setTrademarkDetails(product?.trademarkdetails);
        setImage(`http://localhost:5000/${product?.image}`);
        const arr = [];
        product && product.imagedetails.map(data => {
            arr.push(`http://localhost:5000/${data}`);
        })
        setImageDetails(arr);
    }, [product]);
    console.log(trademarks);
    console.log(trademarks);
    console.log(trademarks);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // //xu ly botoom position: fixed handle color
    // useEffect(() => {
    //     const element = document.querySelector('.add__footer');
    //     const handleSroll = () => {
    //         const heights = window.scrollY;
    //         if (heights > 710) {
    //             element.classList.add('color');
    //         } else if (heights < 700) {
    //             element.classList.remove('color');
    //         }
    //         // console.log(heights)
    //     }
    //     window.addEventListener('scroll', handleSroll);
    // }, []);
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
        const idtrademark = trademarks?.trim();
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
        setAvartarDetailsImage(file);
    }
    // useEffect(() => {
    //     return () => {
    //         for (let i = 0; i < avatarDetails.length; i++) {
    //             // console.log("asdasd");
    //             // console.log(imageDetails[i]);
    //             const fileitem = imageDetails[i];
    //             fileitem && URL.revokeObjectURL(fileitem.preview);
    //         }
    //     }
    // }, [imageDetails]);

    // console.log(imageDetails && imageDetails.length);
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        // console.log(price_last);
        // console.log(price_now);
        // console.log(category);
        // console.log(trademark);
        // console.log(trademarkDetails);
        // console.log(image);
        // console.log(imageDetails);
        // console.log(details);

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
        const formData = new FormData();
        formData.append('name', name);
        const id = product._id;
        formData.append('id', id);
        formData.append('price_now', price_now);
        formData.append('price_last', price_last);
        formData.append('details', details);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('trademark', trademarks);
        formData.append('trademarkdetails', trademarkDetails);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        }
        if (avatar == null && avatarDetails.length == 0) {
            console.log("ko hinh anh");
            FixProductNoImage(dispatch, formData, config);
            alert("Sản phẩm sửa Thành công");

        } else if (avatar != null && avatarDetails.length == 0) {
            console.log(" upload avartar");
            formData.append('image', avatar);
            FixProductImage(dispatch, formData, config);
            alert("Sản phẩm sửa Thành công");
        } else if (avatar == null && avatarDetails.length != 0) {
            console.log("upload avatar details");
            const imagedetails = avatarDetailsImage;
            for (let i = 0; i < imagedetails.length; i++) {
                formData.append("imagedetails", imagedetails[i]);
            }
            FixProductImageDetails(dispatch, formData, config);
            alert("Sản phẩm sửa Thành công");
        } else if (avatar != null && avatarDetails.length != 0) {
            console.log("upload het");
            formData.append('image', avatar);
            const imagedetails = avatarDetailsImage;
            for (let i = 0; i < imagedetails.length; i++) {
                formData.append("imagedetails", imagedetails[i]);
            }
            FixProductAll(dispatch, formData, config);
            alert("Sản phẩm sửa Thành công");
        }
        // for (let i = 0; i < imagedetails.length; i++) {
        //     formData.append("imagedetails", imagedetails[i]);
        // }

        // addproducts(dispatch, navigate, formData, config);

    }
    return (
        <form action="" method='POST' className='add__width' enctype="multipart/form-data">
            <div className='add'>
                <div className="add__big">
                    <div className="add__heading">
                        <div className="add__heading__text">
                            Sửa 1 sản phẩm
                        </div>
                        <div className="add__heading__title">Vui lòng chọn ngành hàng phù hợp cho sản phẩm của bạn.</div>
                    </div>
                    <div className="add__product">
                        <div className="add__product__name">
                            <div className="add__product__name__text">Tên sản phẩm:</div>
                            <div className="add__product__name__input">
                                <input type="text" onChange={e => setName(e.target.value)} value={name} name='name' className="add__product__name__input__text" />
                                <span className="add__product__name__input__hr"></span>
                                <div className="add__product__name__input__number">50/120</div>
                            </div>
                        </div>
                        <div className="add__product__category">
                            <div className="add__product__category__big">
                                <ul className="add__product__category__list__parent">
                                    {navbar?.map(navbars => {
                                        return (
                                            <li style={navbars._id == category && { color: "red" } || { color: "black" }} className="add__product__category__item">
                                                <div onClick={handleCategory} id={navbars._id} title={navbars.name} className="add__product__category__text">{navbars.name}</div>
                                                <i class="fa-solid fa-angle-right add__product__category__icon"></i>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <ul className="add__product__category__list__children">
                                    {trademark?.map(trademarkss => {
                                        return (
                                            <li className="add__product__category__item">
                                                <div style={trademarkss._id == trademarks && { color: "red" } || { color: "black" }} onClick={handleTrademark} id={trademarkss._id} title={trademarkss.name} className="add__product__category__text">{trademarkss.name}</div>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <ul className="add__product__category__list__children">
                                    {navbarDetail && navbarDetail?.map(navbarDetails => {
                                        return (
                                            <li className="add__product__category__item">
                                                <div style={navbarDetails._id == trademarkDetails && { color: "red" } || { color: 'black' }} onClick={handleTrademarkDetails} id={navbarDetails._id} title={navbarDetails.name} className="add__product__category__text__children">{navbarDetails.name}</div>
                                            </li>
                                        )
                                    })}
                                </ul>
                                {/* <div className="empty"></div> */}
                            </div>
                            <div className="add__product__check">
                                <div className="add__product__check__text">Đã chọn :</div>
                                <div className="add__product__check__name">
                                    {/* <div className="add__product__check__name__parent">{categorytitle && categorytitle + "    >  "}  </div>
                                    <div className="add__product__check__name__children">{trademarkstitle && trademarkstitle + "    >   "}</div>
                                    <div className="add__product__check__name__children">{trademarkDetailstitle && trademarkDetailstitle + " ."}</div> */}
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
                        <div className="add__information__product__input__show">
                            <img alt="" src={avatar && avatar.preview || image} className="add__information__product__input__img" />
                        </div>
                    </div>
                    <div className="add__information__product__flex">
                        <div className="add__information__product__heading">Hình ảnh sản phẩm</div>
                        <div className="add__information__product__container">
                            <div className="add__information__product__content">
                                <div className="add__information__product__input">
                                    <i class="fa-solid fa-plus add__information__product__icon"></i>
                                    <input type="file" onChange={handleImageDetails} name='imagedetails' className="add__information__product__file" multiple />
                                </div>
                            </div>
                            <div className="add__information__product__text">Ảnh chi tiết</div>
                        </div>
                        <div className="add__information__product__image__details">
                            {avatarDetails.length > 0 && avatarDetails.map(image => {
                                return (
                                    <div key={image} className="add__information__product__input__flex">
                                        <img alt="" src={image} className="add__information__product__input__img" />
                                    </div>
                                )
                            }) || imageDetails?.map(image => {
                                return (
                                    <div key={image} className="add__information__product__input__flex">
                                        <img alt="" src={image} className="add__information__product__input__img" />
                                    </div>
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
                                    <input type="number" value={price_last} onChange={e => setPricelast(e.target.value)} placeholder='Giá cũ' className="add__information__price__input" />
                                </div>
                            </div>
                            <div className="add__information__price__container">
                                <div className="add__information__price__item">
                                    <div className="add__information__price__item__heading">₫</div>
                                    <span className="add__information__price__item__hr"></span>
                                    <input type="number" value={price_now} onChange={e => setPricenow(e.target.value)} placeholder='Giá mới' className="add__information__price__input" />
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
                                <textarea value={details} onChange={e => setDetails(e.target.value)} name="" id="" className='add__information__decription__textarea' minrows="9" maxrows="26"></textarea>
                            </div>
                        </div>
                        <div className="add__information__decription__number">55/3000</div>
                    </div>
                    <div className="add__information__decription">
                        <div className="add__information__decription__flex">
                            <div className="add__information__product__heading">
                                *Chi tiết sản phẩm
                            </div>
                            <div className="add__information__decription__content">
                                <textarea value={description} onChange={e => setDescription(e.target.value)} name="" id="" className='add__information__decription__textarea' minrows="9" maxrows="26"></textarea>
                            </div>
                        </div>
                        <div className="add__information__decription__number">100/3000</div>
                    </div>
                </div>
            </div>
            <div className="add__footer">
                <div className="add__footer__flex">
                    <div className="add__footer__item">
                        <button type='submit' onClick={handleSubmit} className="add__footer__button">Sửa sản phẩm</button>
                    </div>
                </div>
            </div>
        </form>

    );
}

export default FixProduct;