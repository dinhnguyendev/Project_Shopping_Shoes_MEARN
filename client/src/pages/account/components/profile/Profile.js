import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfomationCutomer, updateInfCustomer } from '../../../../redux/apiRequest';
import './profile.css';
function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.login?.currentUser);
    const customer = useSelector(state => state.customer.getCustomer?.currentCustomer);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name_shop, setNameShop] = useState('');
    const [gender, setGender] = useState('');
    const [avartar, setAvatar] = useState('');
    const [image, setImage] = useState('');
    console.log("user");
    console.log(user);
    console.log(customer);
    useEffect(() => {
        const userid = user._id;
        getInfomationCutomer(dispatch, userid);
    }, [user]);
    useEffect(() => {
        setName(customer?.name);
        setEmail(customer?.email);
        setNameShop(customer?.name_shop);
        setGender(customer?.gender);
        setImage(customer?.avatar);
        setPhone(customer?.phone);
    }, [customer]);
    const handleSubmit = async () => {
        const userid = user._id;
        if (avartar == undefined) {
            await axios.post('http://localhost:5000/user/updateinfomation/noimage',
                {
                    userid, name, gender, name_shop, email
                })
            // updateInfCustomer(userid, customerUpdate.name, customerUpdate.gender,
            //     customerUpdate.name_shop, customerUpdate.email);

        } else {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("userid", userid);
            formData.append("email", email);
            formData.append("name_shop", name_shop);
            formData.append("gender", gender);
            formData.append("image", avartar);
            console.log("co image");
            await axios.post('http://localhost:5000/user/updateinfomation/image', formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            }
            )
        }
        getInfomationCutomer(dispatch, userid);

    }
    return (
        <div class="grid-column-number-10">
            <div class="account-profile">
                <div class="account-profile-heading">
                    <div class="account-profile-heading-heading">Hồ sơ của tôi</div>
                    <div class="account-profile-text">
                        Quản lý thông tin hồ sơ để bảo mật tài khoản
                    </div>
                </div>

                <div class="account-profile-container">
                    <div class="account-profile-container-big">
                        <div class="account-profile-container-form">
                            <div class="account-profile-container-name">
                                <div class="account-profile-container-name-heading">Tên đăng nhập</div>
                                <div class="account-profile-container-padding-x">
                                    <div class="account-profile-container-name-text">{name}</div>
                                </div>
                            </div>
                            <div class="account-profile-container-name">
                                <div class="account-profile-container-name-heading">Tên</div>
                                <div class="account-profile-container-padding">
                                    <input type="text" onChange={e => setName(e.target.value)} name="name" value={name} class="account-profile-container-name-inputname" />
                                </div>
                            </div>
                            <div class="account-profile-container-name">
                                <div class="account-profile-container-name-heading">Email</div>
                                <div class="account-profile-container-padding">
                                    <input type="email" onChange={e => setEmail(e.target.value)} name="email" value={email} placeholder="abc@email.com" class="account-profile-container-name-inputemail" />
                                </div>
                            </div>
                            <div class="account-profile-container-name">
                                <div class="account-profile-container-name-heading">Số điện thoại</div>
                                <div class="account-profile-container-padding">
                                    <input type="text" disabled="disabled" value={phone} class="account-profile-container-name-inputsdt" />
                                </div>
                            </div>
                            <div class="account-profile-container-name">
                                <div class="account-profile-container-name-heading">Tên Shop</div>
                                <div class="account-profile-container-padding">
                                    <input type="text" onChange={e => setNameShop(e.target.value)} name="nameshop" value={name_shop} class="account-profile-container-name-inputshop" />
                                </div>
                            </div>
                            <div class="account-profile-container-name">
                                <div class="account-profile-container-name-heading">Giới tính</div>
                                <div class="account-profile-container-name-inputgender">
                                    <div class="account-profile-container-name-inputshop-nam">
                                        <input type="radio" checked={gender && gender == "Nam" && true || ""} onChange={e => setGender(e.target.value)} value="Nam" name="gender"
                                            class="account-profile-container-name-inputshop-check" />
                                        <div class="account-profile-container-name-inputshop-men-text">Nam</div>
                                    </div>
                                    <div class="account-profile-container-name-inputshop-nu">
                                        <input type="radio" checked={gender && gender == "Nữ" && true || ""} onChange={e => setGender(e.target.value)} value="Nữ" name="gender"
                                            class="account-profile-container-name-inputshop-check" />
                                        <div class="account-profile-container-name-inputshop-men-text">Nữ</div>
                                    </div>
                                    <div class="account-profile-container-name-inputshop-khac">
                                        <input type="radio" checked={gender && gender == "Khác" && true || ""} onChange={e => setGender(e.target.value)} value="Khác"
                                            name="gender"
                                            class="account-profile-container-name-inputshop-check" />
                                        <div class="account-profile-container-name-inputshop-men-text">Khác
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="account-profile-save">
                                <button onClick={handleSubmit} name="save" class="account-profile-save-btn">Lưu</button>
                            </div>
                        </div>

                    </div>
                    <div class="account-profile-container-image">
                        <div class="account-profile-container-image-img">
                            <div class="account-profile-container-image-padding">
                                <div class="account-profile-container-image-img-item">
                                    <img src={image && `http://localhost:5000/${image}` || "https://cf.shopee.vn/file/2eba44f6ff42d4419b12ab9e73652d5c_tn"}
                                        alt="" class="account-profile-container-image-img-item-img" />

                                    <input type="file" class="" onChange={e => setAvatar(e.target.files[0])}
                                        accept=".jpg,.jpeg,.png" name="image" />
                                    <div class="show-file"></div>
                                </div>
                                <div class="account-profile-container-image-img-text">
                                    <div class="account-profile-container-image-img-text-1">Dụng lượng file tối
                                        đa 1 MB
                                    </div>
                                    <div class="account-profile-container-image-img-text-2">Định dạng:.JPEG,
                                        .PNG
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Profile;