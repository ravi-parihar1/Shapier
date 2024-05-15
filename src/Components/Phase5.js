import React, { useRef, useEffect } from 'react';
import '../css/Phase5.css';

export default function Phase5() {




    return (
        <div className="marquee-container">
            <marquee >
                {/* Content to be scrolled */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Official_Jaquar_Group_Logo.png" alt="" />
                <img src="https://www.ijaroceramic.com/images/blog/inner/Kajaria%20Ceramic.jpg" alt="" />
                <img src="https://www.freepnglogos.com/uploads/philips-logo-0.jpg" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Ultratech_Cement_Logo.svg/1200px-Ultratech_Cement_Logo.svg.png" alt="" />
                <img src="https://logowik.com/content/uploads/images/franke3341.jpg" alt="" />

                

                
            </marquee>
        </div>
    );
}
