import { React, useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Phase8 from '../Phase8'
import Phase7 from '../Phase7'
import ChooseUs from '../ChooseUs'
import '../../css/HomePage.css'
import coverPhoto from '../../assets/cover.png';
import Phase6 from '../Phase6'
import contractorImage from '../../assets/HomePageAssets/contractor.jpg';
import plumberImage from '../../assets/HomePageAssets/plumber.jpg';
import LandImage from '../../assets/HomePageAssets/landscrapers.jpg';
import HavcImage from '../../assets/HomePageAssets/HVAC.jpg';
import carpainterImage from '../../assets/HomePageAssets/carpainter.jpg';
import ElectricianImage from '../../assets/HomePageAssets/electrician.jpg';
import cov from '../../assets/HomePageAssets/Animationc (1).json'
import ServiceCard from '../ServiceCard';
import Phase2 from '../Phase2';
import Phase3 from '../Phase3';
import PhaseCategories from "../PhaseCategories"
import Phase4 from '../Phase4';

import TopRatedProduct from "../../TopRatedProduct.json";
import Expo from "../../Exeperimental.json";
import Product from '../product.json'

import Lottie from 'react-lottie';

import Slider1 from '../Slider1'
import Quotation from '../Quotation'
import BottomBar from '../BottomBar'
import Header2 from '../Header2'
import Phase9 from '../Phase9'
import Phase5 from '../Phase5'
import PopupForm from '../PopupForm'
import axios from 'axios'


export default function HomePage() {
    const [topProduct, setTopProduct] = useState([]);

    const fetchProduct = async () => {
        try {
            const { data } = await axios.get(`http://13.232.110.226:5000/api/v1/product`);
            const arrayProduct = data.data;
            setTopProduct(
                arrayProduct.map((fetchedProduct)=>({
                    product_id: fetchedProduct.id,
                    product_name: fetchedProduct.product,
                    product_image: fetchedProduct.product_image,
                    product_price: fetchedProduct.product_price,
                }))
            ); 
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProduct();
    },[]);

    const [isPopupVisible, setPopupVisible] = useState(true); // State to manage popup visibility

    const closePopup = () => {
        setPopupVisible(false);
    };

    const coverOptions = {
        loop: true,
        autoplay: true,
        animationData: cov,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    // Define an array with titles and image sources
    const serviceItems = [
        { title: "General Contractors", imageSrc: contractorImage },
        { title: "Specialized Plumber", imageSrc: plumberImage },
        { title: "Certified Electricians", imageSrc: ElectricianImage },
        { title: "Experienced Landscrapers", imageSrc: LandImage },
        { title: "HVAC Technicians", imageSrc: HavcImage },
        { title: "Skilled Carpainters", imageSrc: carpainterImage },
        // Add other items as needed
    ];

    // Function to dynamically import images
    // const importImage = (imageName) => {
    //     return require(`../../assets/HomePageAssets/${imageName}`).default;
    // };


    return (
        <div>
            {isPopupVisible && <PopupForm onClose={closePopup} />}
            {/* <Header2/>  */}
            {/* <Navbar/> */}
            <Header />
            <div className="blank-container"></div>
            <Slider1 />

            <BottomBar />
            <div className='container mt-4'>

                {/* this is Phase-I Container */}
                <div className='container-fluid'>

                    {/* <Phase6/> */}

                    <h2 className='first-heading'>Streamline construction<br />projects</h2>
                    {/* from this point the first container code begin of choose service */}
                    <div className='inner-container'>
                        <div className='content'>
                            <h5 className='header_of_what_are_you_looking'>What are you looking for ?</h5>
                            {/* from this the services categories code begin */}
                            <div className="row">

                                {serviceItems.map((item, index) => (
                                    <ServiceCard
                                        key={index} // Don't forget to provide a unique key
                                        imageSrc={item.imageSrc}
                                        title={item.title}
                                        className="service-item"
                                    />
                                ))}

                            </div>

                            {/* button code start from here  */}
                            {/* Buttons */}
                            <div className="buttons-container">
                                <button className="book-now-button">Book Now</button>
                                <button className="explore-now-button">Explore Now</button>
                            </div>



                        </div>



                        {/* from this , code for the first page image that three images */}
                        <div className=' image-container'> {/* Add a separate container for image */}
                            <Lottie
                                options={coverOptions}

                            />
                        </div>

                    </div>

                </div>
                <PhaseCategories />
                <Phase2 />

                {/* <Comprehensive/> */}
                <Phase3 />

                <Phase4 />
                <Phase5 />
                {/* <Phase10/> */}
                {/* <Phase6/> */}
                <Phase7 filepath={topProduct} heading={"Top Product"} />
                <Quotation />
                {/* <Phase7 filepath={Expo} heading={"Top Rated Product"} /> */}
                {/* <Phase9/> */}
                <ChooseUs />
                {/* <Phase7 filepath={Product} heading={"Your product"}/> */}

            </div>
            <Footer />
        </div>
    )
}
