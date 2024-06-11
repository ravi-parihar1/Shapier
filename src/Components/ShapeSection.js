import React from 'react'
import Header from './Header'
import BottomBar from './BottomBar'
import Footer from './Footer'

import { useNavigate } from "react-router-dom";

const brands = [
    { name: 'Become a seller', imageUrl: 'https://img.freepik.com/free-vector/sales-representative-abstract-concept_335657-3002.jpg?w=740&t=st=1717947181~exp=1717947781~hmac=eac14499a1abb2d3e2572354fbf3de9153a79ba16ee345080352b6b6ec23201e', navigation: '/seller' },
    { name: 'Get a Free quote', imageUrl: 'https://img.freepik.com/free-vector/online-assistant-user-help-frequently-asked-questions-call-center-worker-cartoon-character-woman-working-hotline_335657-2336.jpg?w=740&t=st=1717947680~exp=1717948280~hmac=d5f9f45d148f1ea78ecf5e0955806b3b623182fe136c58d70cfccde027374771', navigation: '/request-quotation' },
    { name: 'Contact', imageUrl: 'https://img.freepik.com/free-vector/webinar-internet-lesson-distance-university-tutor-educator-online-learning-seniors-online-courses-seniors-additional-education-concept-pinkish-coral-bluevector-isolated-illustration_335657-1497.jpg?w=996&t=st=1717947638~exp=1717948238~hmac=91404e5f687c4615f8d3fc40905896dd42d90a9a40fdcfa1e26662917f3dd182', navigation: '/contact' },
    { name: 'Services', imageUrl: 'https://img.freepik.com/free-vector/social-network-online-dating-service-chatting-internet-communication-girl-cartoon-character-looking-profiles-with-photo-social-media-concept-illustration_335657-2041.jpg?size=626&ext=jpg', navigation: '/explore' },
];

export default function ShapeSection() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <BottomBar />
            <div className="blank-container"></div>
            <div className="ViewAllBrand-container my-5">
            <h4 className='ViewAllBrand-container-h4'>Need To Find Something</h4>

                <div className="ViewAllBrand-row row">

                    {brands.map((brand, index) => (
                        <div key={index} className="ViewAllBrand-col col-6 col-md-4 col-lg-3">
                            <div
                                className="ViewAllBrand-card"
                                style={{ backgroundColor: 'white', backgroundImage: `url(${brand.imageUrl})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                                onClick={() => { navigate(brand.navigation); window.scrollTo(0, 0); }}
                            >
                                <div className="ViewAllBrand-overlay"></div>
                                <span className="ViewAllBrand-text">{brand.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
