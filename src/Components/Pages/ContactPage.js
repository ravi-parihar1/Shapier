import React,{ useEffect } from 'react';
import Header from '../Header';
import './ContactPage.css'
import shapelogo from '../../assets/shapelogo.png';

export default function ContactPage() {

    useEffect(() => {
        // const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const contactForm = document.getElementById('contact-form');
        const errorElement = document.getElementById('error');
        const successMsg = document.getElementById('success-msg');
        const submitBtn = document.getElementById('submit');

        // const switchTheme = (e) => {
        //     if (e.target.checked) {
        //         document.documentElement.setAttribute('data-theme', 'dark');
        //     } else {
        //         document.documentElement.setAttribute('data-theme', 'light');
        //     }
        // };

        const validate = (e) => {
            e.preventDefault();

            if (name.value.length < 3) {
                errorElement.innerHTML = 'Your name should be at least 3 characters long.';
                return false;
            }

            if (!(email.value.includes('.') && (email.value.includes('@')))) {
                errorElement.innerHTML = 'Please enter a valid email address.';
                return false;
            }

            if (!emailIsValid(email.value)) {
                errorElement.innerHTML = 'Please enter a valid email address.';
                return false;
            }

            if (message.value.length < 15) {
                errorElement.innerHTML = 'Please write a longer message.';
                return false;
            }

            errorElement.innerHTML = '';
            successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.';

            e.preventDefault();
            setTimeout(() => {
                successMsg.innerHTML = '';
                document.getElementById('contact-form').reset();
            }, 6000);

            return true;
        };

        const emailIsValid = (email) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };

        // toggleSwitch.addEventListener('change', switchTheme);
        submitBtn.addEventListener('click', validate);

        return () => {
            // toggleSwitch.removeEventListener('change', switchTheme);
            submitBtn.removeEventListener('click', validate);
        };
    }, []); // Empty dependency array ensures that the effect runs only once after the initial render




    return (
       <>
         <Header/>
         <div className="contact-container">
            <div className="left-col">
                {/* <img className="contact-logo" src={shapelogo} alt="Shapier Logo" /> */}
            </div>
            <div className="right-col">
                

                <h1 className="contact-heading">Contact us</h1>
                <p className="contact-description">Planning to visit Indonesia soon? Get insider tips on where to go, things to do and find best deals for your next adventure.</p>

                <form id="contact-form" className="contact-form" method="post">
                    <label htmlFor="name" className="contact-label">Full name</label>
                    <input type="text" id="name" name="name" placeholder="Your Full Name" className="contact-input" required />
                    <label htmlFor="email" className="contact-label">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Your Email Address" className="contact-input" required />
                    <label htmlFor="message" className="contact-label">Message</label>
                    <textarea rows="6" placeholder="Your Message" id="message" name="message" className="contact-textarea" required></textarea>
                    <button type="submit" id="submit" name="submit" className="contact-submit">Send</button>
                </form>
                <div id="error" className="contact-error"></div>
                <div id="success-msg" className="contact-success"></div>
            </div>
        </div>
       </>
    );
}
