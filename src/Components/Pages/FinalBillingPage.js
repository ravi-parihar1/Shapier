import React from 'react';
import '../../css/FinalBillingPage.css';
import Header from '../Header';
import BottomBar from '../BottomBar';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/shapelogo.png';
import { event } from 'jquery';

const CouponInput = () => (
    <div className="coupon-input-checkoutPage">
        <input type="text" placeholder="Enter Coupon Code" className="coupon-code-input-checkoutPage" />
        <button className="apply-button-checkoutPage">Apply</button>
    </div>
);

const OrderSummary = () => {
    const { total_amount } = useParams();

    const checkoutHandler = async (amount) => {
        try {
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

                    const body = { ...response,}

                    const validateResponse = await fetch('https://free.shapier.in/api/v1/paymentverification', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body)

                    })
                   
                    const jsonResponse = await validateResponse.json();

                    console.log('jsonResponse', jsonResponse);

                },

                prefill: {
                    name: "Shapier",
                    email: "example.kumar@example.com",
                    contact: "6377692127"
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#121212"
                }
            };

            const razor = new window.Razorpay(options);
            razor.on("payment.failed", function (response) {
                alert(response.error.code);
                alert(response.error.description)
                alert(response.error.source)
                alert(response.error.step)
                alert(response.error.reason)
                alert(response.error.metadata.order_id)
                alert(response.error.metadata.payment_id)
            })
            razor.open();
            event.preventDefault();
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <>
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
                    <button className="checkout-button-checkoutPage" onClick={() => checkoutHandler(+total_amount + 5 + 10)}>Pay Now</button>
                </div>
            </div>
        </>
    );
};

export default function FinalBillingPage() {
    return (
        <>
            <Header />
            <div className="blank-container"></div>
            <div className="gird-container-billing">
                <div className="billing-address">
                    <h2 className="BillingPage-form-title">Billing Information</h2>
                    <form className="BillingPage-billing-form">
                        <div className="BillingPage-form-group">
                            <input type="text" placeholder="First Name" className="BillingPage-form-input" />
                            <input type="text" placeholder="Last Name" className="BillingPage-form-input" />
                        </div>
                        <div className="BillingPage-form-group">
                            <input type="email" placeholder="Email" className="BillingPage-form-input" />
                        </div>
                        <div className="BillingPage-form-group">
                            <input type="text" placeholder="Phone No." className="BillingPage-form-input" />
                        </div>
                        <div className="BillingPage-form-group">
                            <input type="text" placeholder="Pincode" className="BillingPage-form-input" />
                            <input type="text" placeholder="State" className="BillingPage-form-input" />
                        </div>
                        <div className="BillingPage-form-group">
                            <input type="text" placeholder="City" className="BillingPage-form-input" />
                        </div>
                        <div className="BillingPage-form-group">
                            <textarea placeholder="Address" className="BillingPage-form-input"></textarea>
                        </div>
                        {/* <button type="submit" className="BillingPage-submit-button">Save</button> */}
                    </form>
                </div>
                <OrderSummary />
            </div>
            <BottomBar />
            <Footer />
        </>
    );
}
