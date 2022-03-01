import './profile.css';
function Profile() {
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
                                    <div class="account-profile-container-name-text">dinh</div>
                                </div>
                            </div>
                            <div class="account-profile-container-name">
                                <div class="account-profile-container-name-heading">Tên</div>
                                <div class="account-profile-container-padding">
                                    <input type="text" name="name" value="nguyen ngoc dinh" class="account-profile-container-name-inputname" />
                                </div>
                            </div>
                            <div class="account-profile-container-name">
                                <div class="account-profile-container-name-heading">Email</div>
                                <div class="account-profile-container-padding">
                                    <input type="email" name="email" value="onstart123@gmail.com" placeholder="abc@email.com" class="account-profile-container-name-inputemail" />
                                </div>
                            </div>
                            <div class="account-profile-container-name">
                                <div class="account-profile-container-name-heading">Số điện thoại</div>
                                <div class="account-profile-container-padding">
                                    <input type="text" disabled="disabled" value="0389442897" class="account-profile-container-name-inputsdt" />
                                </div>
                            </div>
                            <div class="account-profile-container-name">
                                <div class="account-profile-container-name-heading">Tên Shop</div>
                                <div class="account-profile-container-padding">
                                    <input type="text" name="nameshop" value="dinh@" class="account-profile-container-name-inputshop" />
                                </div>
                            </div>
                            <div class="account-profile-container-name">
                                <div class="account-profile-container-name-heading">Giới tính</div>
                                <div class="account-profile-container-name-inputgender">
                                    <div class="account-profile-container-name-inputshop-nam">
                                        <input type="radio" value="NAM" name="gender" checked
                                            class="account-profile-container-name-inputshop-check" />
                                        <div class="account-profile-container-name-inputshop-men-text">Nam</div>
                                    </div>
                                    <div class="account-profile-container-name-inputshop-nu">
                                        <input type="radio" value="NU" name="gender"
                                            class="account-profile-container-name-inputshop-check" />
                                        <div class="account-profile-container-name-inputshop-men-text">Nữ</div>
                                    </div>
                                    <div class="account-profile-container-name-inputshop-khac">
                                        <input type="radio" value="KHAC"
                                            name="gender"
                                            class="account-profile-container-name-inputshop-check" />
                                        <div class="account-profile-container-name-inputshop-men-text">Khác
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="account-profile-save">
                                <button name="save" class="account-profile-save-btn">Lưu</button>

                            </div>
                        </div>

                    </div>
                    <div class="account-profile-container-image">
                        <div class="account-profile-container-image-img">
                            <div class="account-profile-container-image-padding">
                                <div class="account-profile-container-image-img-item">
                                    <img src="https://cf.shopee.vn/file/2eba44f6ff42d4419b12ab9e73652d5c_tn"
                                        alt="" class="account-profile-container-image-img-item-img" />
                                    <img src="https://cf.shopee.vn/file/2eba44f6ff42d4419b12ab9e73652d5c_tn"
                                        alt="" class="account-profile-container-image-img-item-img" />
                                    <input type="file" class="account-profile-container-iput-file"
                                        accept=".jpg,.jpeg,.png" name="image" />
                                    <div class="show-file"></div>
                                    <div class="account-profile-container-iput-file-btn">Chọn Ảnh</div>
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