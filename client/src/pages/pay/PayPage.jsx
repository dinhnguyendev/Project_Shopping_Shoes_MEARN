import Address from "./components/address/Address";
import Pay from "./components/pay/Pay";
import './payPage.css';
function PayPage() {
    return (
        <div className="paypage" >
            <div className="paypage__gripd">
                <Address />
                <Pay />

            </div>
        </div>
    );
}

export default PayPage;