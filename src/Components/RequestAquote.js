import React from 'react'
import '../css/RequestAquote.css'
import Header from './Header'
import BottomBar from './BottomBar'
import Footer from './Footer'

export default function RequestAquote() {
    return (
        <>
            <Header />
            <BottomBar />
            <div className="blank-container"></div>
            <div className="RequestAquoteForm-container">
                <h2 className="RequestAquoteForm-title">Get a Free Quote</h2>
                <p className="RequestAquoteForm-subtitle">Assured Best Prices for your Construction Needs.</p>
                <form className="RequestAquoteForm-form">
                    <label className="RequestAquoteForm-label">Product Name: *</label>
                    <input className="RequestAquoteForm-input" type="text" name="productName" required />

                    {/* <label className="RequestAquoteForm-label">UOM:</label>
                    <input className="RequestAquoteForm-input" type="text" name="uom" /> */}

                    <label className="RequestAquoteForm-label">Min Qty:</label>
                    <input className="RequestAquoteForm-input" type="number" name="minQty" />

                    <label className="RequestAquoteForm-label">Your Name: *</label>
                    <input className="RequestAquoteForm-input" type="text" name="name" required />

                    <label className="RequestAquoteForm-label">Mobile: *</label>
                    <input className="RequestAquoteForm-input" type="tel" name="mobile" required />

                    <label className="RequestAquoteForm-label">Email: *</label>
                    <input className="RequestAquoteForm-input" type="email" name="email" required />

                    <label className="RequestAquoteForm-label">Delivery Location: *</label>
                    <select className="RequestAquoteForm-input" name="deliveryLocation" required>
                        <option value="">Select City</option>
                        {/* Add city options here */}
                    </select>

                    <label className="RequestAquoteForm-label">Please describe your requirements: *</label>
                    <textarea className="RequestAquoteForm-textarea" name="requirements" required></textarea>

                    <button className="RequestAquoteForm-button" type="submit">Submit</button>
                </form>
            </div>

            <Footer />
        </>
    )
}
