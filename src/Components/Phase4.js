import React from 'react'
import Lottie from 'react-lottie';
import { PiWhatsappLogoLight } from "react-icons/pi";
import { LuPhoneCall } from "react-icons/lu";
import animatefile from '../assets/HomePageAssets/Animation .json';
import ani from '../assets/HomePageAssets/Animation2.json'
import './Phase4.css'




export default function Phase4() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animatefile,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const secondOptions = {
        loop: true,
        autoplay: true,
        animationData: ani,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className='Phase4-container mb-4' style={{ display: 'flex' }}>

            <div className="img-container-p4">
                <Lottie
                    options={defaultOptions}
                    height={300} // Adjust the height as needed
                    width={300} // Adjust the width as needed
                />
            </div>

            {/* contact form for bulk order that request for a demo form*/}

            <div className="requestdemo">
                <div className="in-container">
                    <h1>Request a Quote</h1>
                    <p>order in bulk Easily with our special <br />chat and call options</p>
                    <div className="but">
                        <button className="whatsapp-button mt-4 "><PiWhatsappLogoLight className="icon"/>WhatsApp</button>
                        <button className="call-button mt-4"><LuPhoneCall className="icon"/>Call</button>
                    </div>
                </div>
                <div className="ani-container">
                <Lottie
                    options={secondOptions}
                    height={200} // Adjust the height as needed
                    width={250} // Adjust the width as needed
                />
                </div>
            </div>

        </div>
    )
}


