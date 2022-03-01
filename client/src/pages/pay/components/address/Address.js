import './address.css';
function Address() {
    return (
        <div class="container-pay-big">
            <div class="container-pay-address">
                <div class="container-pay-address-space"></div>
                <div class="container-pay-address-fex">
                    <div class="container-pay-address-heading">
                        <div class="container-pay-address-heading-icon">
                            <i class="fal fa-map-marker-alt container-pay-address-heading-icon"></i>
                        </div>
                        <div class="container-pay-address-heading-text">
                            Địa chỉ nhận hàng
                        </div>
                    </div>
                    <div class="container-pay-address-button-add">
                        <div class="container-pay-address-button-add-btn">
                            <div class="container-pay-address-button-add-icon">
                                <i class="fal fa-plus"></i>
                            </div>
                            <div class="container-pay-address-button-add-text">
                                Thêm địa chỉ mới
                            </div>

                        </div>
                    </div>

                </div>
                <div class="container-pay-address-list">
                    <div class="container-pay-address-list-big">

                        <div class="container-pay-address-list-item">
                            <div class="container-pay-address-list-input">
                                <input type="radio" name="addressorders" checked value="<?php echo $showaddress['addresses_name_customer']; ?>;<?php echo $showaddress['addresses_phone']; ?>;<?php echo $showaddress['addresses_name']; ?>"
                                    class="container-pay-address-list-input-check" />
                            </div>
                            <div class="container-pay-address-list-name">
                                <div class="container-pay-address-list-name-customers">
                                    <b>nguyen ngoc dinh  &nbsp;0389442897</b>

                                </div>
                            </div>
                            <div class="container-pay-address-list-address">
                                so 83,ap o tre lon,thanh my chau thanh tra vinh
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Address;