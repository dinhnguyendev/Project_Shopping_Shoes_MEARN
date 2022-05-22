import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FaUserAltSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addProductDetails, checkOrder, deleteProductDetails, getColor, getdetailsproducts, getSize } from '../../../../../../redux/apiRequest';
import './addSize.css';
const AddSize = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [colorState, setColorstate] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [sizeState, setSizeState] = useState('');
    const { slug } = useParams();
    useEffect(() => {
        getdetailsproducts(dispatch, slug, navigate);
        getColor(dispatch);
        getSize(dispatch);
    }, []);
    const color = useSelector(state => state.products.color?.products);
    const orderboolean = useSelector(state => state.order.checkOrder?.currentOrder);
    const size = useSelector(state => state.products.size?.products);
    const product = useSelector(state => state.products.productdetails.productdetail?.attributes);
    const products = useSelector(state => state.products.productdetails?.productdetail);
    const productLastUpdate = useSelector(state => state.products.adddetails.products?.attributes);
    const handleSetColor = (e) => {
        console.log(e.target.value);
        setColorstate(e.target.value);
    }
    const handleSetSize = (e) => {
        console.log(e.target.value);
        setSizeState(e.target.value);
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value);

    }
    const handleCheckQuantity = () => {
        const number = Number(quantity);
        if (number < 1) {
            setQuantity(1);
        }
    }
    const handleAddQuantity = () => {
        const number = Number(quantity);
        setQuantity(number + 1);
    }
    const handleMinusQuantity = () => {
        const number = Number(quantity);
        if (number > 1) {
            setQuantity(number - 1);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (colorState == '') {
            return alert("vui lòng chọn màu sắc và kích thước!")
        }
        if (sizeState == '') {
            return alert("vui lòng chọn màu sắc và kích thước!")
        }
        const id = product?._id;
        const dataSubmit = {
            number: quantity,
            slug,
            color: colorState,
            size: sizeState
        }
        await addProductDetails(dispatch, dataSubmit);
        getdetailsproducts(dispatch, slug, navigate);
        alert("Thêm thành công");
    }
    const handleDelete = async (e) => {
        if (confirm("Bạn có chắc muốn xóa") == true) {
            const str = e.target.id;
            const arr = str.split(",");
            const iddetails = arr[0];
            const number = arr[1];
            const color = arr[2];
            const size = arr[3];
            const id = products._id;
            const res = await axios.post('http://localhost:5000/order/check', { id, color, size })
            console.log(typeof (res.data));
            if (res.data == null) {
                deleteProductDetails(dispatch, slug, iddetails, number);
                getdetailsproducts(dispatch, slug, navigate);
                alert("Xóa thành công");
            } else {
                alert("Sản phẩm đang được mua");
            }
        }
    }
    let stt = 0;
    return (
        <div>
            <div className="add">
                <div className="add__heading">Thêm Màu sắc và kích thước</div>
                <div className="add__flex">
                    <form action="">
                        <div className="add__item">
                            <div className="add__item__flex">
                                <div className="add__item__select">
                                    <div className="add__item__select__heading">màu sắc :</div>
                                    <select name="" id="" className="add__item__option" onChange={handleSetColor} value={colorState}>
                                        <option value="">Chọn màu sắc</option>
                                        {color?.map(colors => <option className='add__item__option__item' key={colors._id} value={colors._id}>{colors.name}</option>)}

                                    </select>
                                </div>
                                <div className="add__item__select">
                                    <div className="add__item__select__heading">kích thước:</div>
                                    <select name="" id="" className="add__item__option" onChange={handleSetSize} value={sizeState}>
                                        <option value="">Chọn size</option>
                                        {size?.map(sizes => <option className='add__item__option__item' key={sizes._id} value={sizes._id}>{sizes.name}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="add__item__select">
                                <div className="add__item__select__heading">Số lượng:</div>
                                <div className="add__item__quantity__item">
                                    <i onClick={handleAddQuantity} class="fal fa-plus add__item__quantity__icon add__item__quantity__icon__add"></i>
                                    <input type='number' onBlur={handleCheckQuantity} onChange={handleQuantity} value={quantity} className="add__item__quantity__input" />
                                    <i onClick={handleMinusQuantity} class="fal fa-minus add__item__quantity__icon add__item__quantity__icon__minus"></i>
                                </div>
                            </div>
                            <div className="add__item__button">
                                <button onClick={handleSubmit} className="add__item__btn">Thêm chi tiết</button>
                            </div>
                        </div>
                    </form>
                    <div className="add__item">
                        <div className="add__item__table">
                            <table className='add__item__table__big'>
                                <tr>
                                    <th className='add__item__table__th'>số thứ tự</th>
                                    <th className='add__item__table__th'>màu sắc</th>
                                    <th className='add__item__table__th'>size</th>
                                    <th className='add__item__table__th'>số lượng</th>
                                    <th className='add__item__table__th'>Thao tác</th>
                                </tr>

                                {product?.map(products => {
                                    stt = stt + 1;
                                    return (
                                        <tr key={products._id} className='add__item__table__tr'>
                                            <td className='add__item__table__td'>{stt}</td>
                                            <td className='add__item__table__td'>{products.color.name}</td>
                                            <td className='add__item__table__td'>{products.size.name}</td>
                                            <td className='add__item__table__td'>{products.quantity}</td>
                                            <td className='add__item__table__td'><i id={[products._id, products.quantity, products.color._id, products.size._id]} onClick={handleDelete} class="fas fa-ban add__item__table__icon"></i></td>
                                        </tr>
                                    )
                                })}

                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddSize;