import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Phase8 from '../Phase8';
import Phase7 from '../Phase7';
import ChooseUs from '../ChooseUs';
import '../../css/HomePage.css';
import CategoriesPageProductDivision from '../CategoriesPageProductDivision';
import coverPhoto from '../../assets/cover.png';
import Phase6 from '../Phase6';
import contractorImage from '../../assets/HomePageAssets/contractor.jpg';
import plumberImage from '../../assets/HomePageAssets/plumber.jpg';
import LandImage from '../../assets/HomePageAssets/landscrapers.jpg';
import HavcImage from '../../assets/HomePageAssets/HVAC.jpg';
import carpainterImage from '../../assets/HomePageAssets/carpainter.jpg';
import ElectricianImage from '../../assets/HomePageAssets/electrician.jpg';
import cov from '../../assets/HomePageAssets/Animationc (1).json';
import ServiceCard from '../ServiceCard';
import Phase2 from '../Phase2';
import PhaseCategories from "../PhaseCategories";
import Phase4 from '../Phase4';
import TopRatedProduct from "../../TopRatedProduct.json";
import Expo from "../../Exeperimental.json";
import Product from '../product.json';
import Lottie from 'react-lottie';
import Slider1 from '../Slider1';
import Quotation from '../Quotation';
import BottomBar from '../BottomBar';
import Phase9 from '../Phase9';
import Phase5 from '../Phase5';
import PopupForm from '../PopupForm';
import axios from 'axios';
import ComBox from '../ComBox';
import AlterCategories from '../AlterCategories';
import BlogHub from '../BrandPage';
import PopularBrands from '../PopularBrands';
import HomePageProductDivision from '../HomePageProductDivision';
import SellerBottom from '../SellerBottom';

export default function HomePage() {
    const [topProduct, setTopProduct] = useState([]);
    const navigate = useNavigate();

    const fetchProduct = async () => {
        try {
            const { data } = await axios.get(`https://free.shapier.in/api/v1/product`);
            const arrayProduct = data.data;
            setTopProduct(
                arrayProduct.map((fetchedProduct) => ({
                    product_id: fetchedProduct.id,
                    product_name: fetchedProduct.product,
                    product_image: fetchedProduct.product_image,
                    product_price: fetchedProduct.product_price,
                }))
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const [isPopupVisible, setPopupVisible] = useState(true);

    const closePopup = () => {
        setPopupVisible(false);
    };

    const toServicePage = () => {
        navigate("/services");
        window.scrollTo(0, 0);
    };

    const coverOptions = {
        loop: true,
        autoplay: true,
        animationData: cov,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const serviceItems = [
        { title: "General Contractors", imageSrc: contractorImage },
        { title: "Specialized Plumber", imageSrc: plumberImage },
        { title: "Certified Electricians", imageSrc: ElectricianImage },
        { title: "Experienced Landscrapers", imageSrc: LandImage },
        { title: "HVAC Technicians", imageSrc: HavcImage },
        { title: "Skilled Carpainters", imageSrc: carpainterImage },
    ];

    return (
        <div>
            {isPopupVisible && <PopupForm onClose={closePopup} />}
            <Header />
            <div className="blank-container"></div>
            <Slider1 />
            <BottomBar />
            <div className='container mt-4'>
                <div className='container-fluid'>
                    <h1 className='first-heading'>Streamline construction<br />projects</h1>
                    <div className='inner-container'>
                        <div className='content'>
                            <h5 className='header_of_what_are_you_looking'>What are you looking for ?</h5>
                            <div className="row">
                                {serviceItems.map((item, index) => (
                                    <div key={index} className='container-card' onClick={()=>{navigate(`/service/${item.title}`)}}>
                                        <img src={item.imageSrc} alt={item.title} />
                                        <h6 className="service-title">{item.title}</h6>
                                    </div>
                                ))}
                            </div>
                            <div className="buttons-container">
                                <button className="book-now-button" onClick={toServicePage}>Book Now</button>
                                <button className="explore-now-button" onClick={() => { navigate('/explore'); }}>Explore Now</button>
                            </div>
                        </div>
                        <div className='image-container'>
                            <Lottie options={coverOptions} />
                        </div>
                    </div>
                </div>
                <AlterCategories />
                <PopularBrands />
                <Phase4 />
                <CategoriesPageProductDivision category_names='cement' />
                <Quotation />
                <CategoriesPageProductDivision category_names='Bricks & Blocks' />
                {/* <ComBox /> */}
                <SellerBottom/>
                <ChooseUs />
            </div>
            <Footer />
        </div>
    );
}
