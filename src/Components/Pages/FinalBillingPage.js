import React from 'react'
import '../../css/FinalBillingPage.css'
import Header from '../Header';
import BottomBar from '../BottomBar';
import Footer from '../Footer';

const CouponInput = () => (
    <div className="coupon-input-checkoutPage">
        <input type="text" placeholder="Enter Coupon Code" className="coupon-code-input-checkoutPage" />
        <button className="apply-button-checkoutPage">Apply</button>
    </div>
);


const OrderSummary = () => {
    return (
        
        <>
        
        
        <div className="order-summary-checkout">
            <h2 className="order-summary-title-checkout">Order Summary</h2>
            <div className="order-summary-details-checkout">
                <div className="order-summary-row-checkout">
                    <span>Subtotal:</span>
                    <span>$100</span>
                </div>
                <div className="order-summary-row-checkout">
                    <span>Shipping:</span>
                    <span>$10</span>
                </div>
                <div className="order-summary-row-checkout">
                    <span>Taxes:</span>
                    <span>$5</span>
                </div>
                <hr className="divider-checkoutPage" />
                
                <div className="order-summary-row-checkout">
                    <span>Total:</span>
                    <span>$110</span>
                </div>
                <button className="checkout-button-checkoutPage">Pay Now</button>
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
                            <button type="submit" className="BillingPage-submit-button">Save</button>
                        </form>
                    
                </div>
                <OrderSummary />
            </div>
            <BottomBar />
            <Footer />
        </>
    )
}
