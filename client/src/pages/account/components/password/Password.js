import './password.css';
function Password() {
    return (
        <div>
            <div class="grid-column-number-10">
                <div class="account-password">
                    <div class="account-password-heading">
                        <div class="account-password-heading-heading">Đổi mật khẩu</div>
                        <div class="account-password-text">
                            Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
                        </div>
                    </div>
                    <div class="account-password-container">
                        <div class="account-password-container-now">
                            <div class="account-password-container-nows">
                                <div class="account-password-container-nows-text">
                                    <label for="" class="account-password-container-label">Mật khẩu hiện tại</label>
                                </div>
                                <div class="account-password-container-nows-input">
                                    <input type="text" name="password-now" required class="account-password-container-nows-input-passwordnow" />
                                </div>
                            </div>
                            <div class="account-password-container-nows">
                                <div class="account-password-container-nows-text">
                                    <label for="" class="account-password-container-label">Mật khẩu mới</label>
                                </div>
                                <div class="account-password-container-nows-input">
                                    <input type="text" name="password-new" required class="account-password-container-nows-input-passwordnow" />
                                </div>
                            </div>
                            <div class="account-password-container-nows">
                                <div class="account-password-container-nows-text">
                                    <label for="" class="account-password-container-label">Xác nhận mật khẩu</label>
                                </div>
                                <div class="account-password-container-nows-input">
                                    <input type="text" name="password-repeat" required class="account-password-container-nows-input-passwordnow" />
                                </div>
                            </div>
                            <div class="account-password-container-submit">
                                <div class="account-password-container-submit-space"></div>
                                <div class="account-password-container-button">
                                    <button name="change" class="account-password-container-btn account-password-container-btn-not">Xác nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Password;