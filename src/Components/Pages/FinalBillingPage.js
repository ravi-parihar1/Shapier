import React, { useState, useEffect } from 'react';
import '../../css/FinalBillingPage.css';
import Header from '../Header';
import BottomBar from '../BottomBar';
import Footer from '../Footer';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/shapelogo.png';

const CouponInput = () => (
    <div className="coupon-input-checkoutPage">
        <input type="text" placeholder="Enter Coupon Code" className="coupon-code-input-checkoutPage" />
        <button className="apply-button-checkoutPage">Apply</button>
    </div>
);

const OrderSummary = ({ isFormValid, billingInfo }) => {
    const { total_amount } = useParams();
    const localData = JSON.parse(localStorage.getItem("data"));
    const { userId } = localData;
    const [paymentMode, setPaymentMode] = useState('Cash on Delivery');
    const navigate = useNavigate();

    const checkoutHandler = async (amount, mode) => {
        try {
            setPaymentMode(mode);

            const { data: { order } } = await axios.post('https://free.shapier.in/api/v1/checkout', { amount });

            const { data: { key } } = await axios.get('https://free.shapier.in/api/v1/getKey');

            const options = {
                key,
                amount: order.amount,
                currency: "INR",
                name: "Shapier",
                description: "Your final step",
                image: logo,
                order_id: order.id,
                handler: async function (response) {
                    const productIds = JSON.parse(localStorage.getItem('productIds')) || [];
                    const vendorName = JSON.parse(localStorage.getItem('vendorName')) || [];

                    const body = {
                        ...response,
                        billingInfo,
                        productIds,
                        vendorName,
                        userId,
                        amount,
                        paymentMode: mode
                    };

                    const validateResponse = await fetch('https://free.shapier.in/api/v1/paymentverification', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body)
                    },navigate('/thankyou'));

                    const jsonResponse = await validateResponse.json();
                    console.log('jsonResponse', jsonResponse);
                    
                },
                prefill: {
                    name: `${billingInfo.firstName} ${billingInfo.lastName}`,
                    email: billingInfo.email,
                    contact: billingInfo.phone
                },
                notes: {
                    address: billingInfo.address
                },
                theme: {
                    color: "#121212"
                }
            };

            const razor = new window.Razorpay(options);
            razor.on("payment.failed", function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });
            razor.open();
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <div className="order-summary-checkout">
            <h2 className="order-summary-title-checkout">Order Summary</h2>
            <div className="order-summary-details-checkout">
                <div className="order-summary-row-checkout">
                    <span>Subtotal:</span>
                    <span>Rs.{total_amount}</span>
                </div>
                <div className="order-summary-row-checkout">
                    <span>Shipping:</span>
                    <span>Rs.10</span>
                </div>
                <div className="order-summary-row-checkout">
                    <span>Taxes:</span>
                    <span>Rs.5</span>
                </div>
                <hr className="divider-checkoutPage" />
                <div className="order-summary-row-checkout">
                    <span>Total:</span>
                    <span>Rs. {+total_amount + 5 + 10}</span>
                </div>
                <button
                    className="checkout-button-checkoutPage"
                    type='submit'
                    onClick={() => checkoutHandler(+total_amount + 5 + 10, 'Online Payment')}
                    disabled={!isFormValid}
                >
                    Pay Now
                </button>

                <button
                    className="checkout-button-checkoutPage"
                    type='submit'
                    // onClick={() => checkoutHandler(+total_amount + 5 + 10, 'Online Payment')} 
                    disabled={!isFormValid}
                >
                    Cash on Delivery
                </button>


            </div>
        </div>
    );
};

export default function FinalBillingPage() {
    const [billingInfo, setBillingInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        pincode: '',
        state: '',
        city: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
    };

    const isFormValid = Object.values(billingInfo).every(field => field.trim() !== '');

    return (
        <>
            <Header />
            <div className="blank-container"></div>
            <div className="grid-container-billing">
                <div className="billing-address">
                    <h2 className="BillingPage-form-title">Billing Information</h2>
                    <form className="BillingPage-billing-form">
                        <div className="BillingPage-form-group">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="BillingPage-form-input"
                                name="firstName"
                                value={billingInfo.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="BillingPage-form-input"
                                name="lastName"
                                value={billingInfo.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="BillingPage-form-group">
                            <input
                                type="email"
                                placeholder="Email"
                                className="BillingPage-form-input"
                                name="email"
                                value={billingInfo.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="BillingPage-form-group">
                            <input
                                type="text"
                                placeholder="Phone No."
                                className="BillingPage-form-input"
                                name="phone"
                                value={billingInfo.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="BillingPage-form-group">
                            <input
                                type="text"
                                placeholder="Pincode"
                                className="BillingPage-form-input"
                                name="pincode"
                                value={billingInfo.pincode}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                placeholder="State"
                                className="BillingPage-form-input"
                                name="state"
                                value={billingInfo.state}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="BillingPage-form-group">
                            <input
                                type="text"
                                placeholder="City"
                                className="BillingPage-form-input"
                                name="city"
                                value={billingInfo.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="BillingPage-form-group">
                            <textarea
                                placeholder="Address"
                                className="BillingPage-form-input"
                                name="address"
                                value={billingInfo.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </form>
                </div>
                <OrderSummary isFormValid={isFormValid} billingInfo={billingInfo} />
            </div>
            <BottomBar />
            <Footer />
        </>
    );
}
