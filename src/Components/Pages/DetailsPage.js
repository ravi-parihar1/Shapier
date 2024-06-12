import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../../css/DetailsPage.css'
import Header from '../Header'
import CategoriesPageProductDivision from '../CategoriesPageProductDivision';
import axios from 'axios';
import BottomBar from '../BottomBar';
// import FaqComponent from '../FaqComponent';

export default function DetailsPage() {
    const navigate = useNavigate();
    const { subcategory_id } = useParams();
    const [ProductDetails, setProductDetails] = useState([]);
    const storedData = JSON.parse(localStorage.getItem("data"));
    const userId = storedData ? storedData.userId : null;
    const token = storedData ? storedData.token : null;
    const [isAddedToCart, setIsAddedToCart] = useState(false)
    const [quantity, setQuantity] = useState(1);

    const fetchProductDetails = async () => {
        const { data } = await axios.get(`https://free.shapier.in/api/v1/product/${subcategory_id}`);
        const arrayOfProductDetails = data.data;
        console.log(arrayOfProductDetails)
        setProductDetails(arrayOfProductDetails.map(details => ({
            id: details.id,
            discount: details.discount,
            minimum_qauntity: details.minimum_qauntity,
            per_base: details.per_base,
            product: details.product,
            product_description: details.product_description,
            product_image: details.product_image,
            product_price: details.product_price,
            sale_price: details.sale_price,
            stock: details.stock,
            vandor_name: details.vandor_name,
            subcategory_id: details.subcategory_id
        })))
    }

    const addToCart = async () => {


        try {
            const re = await axios.post('https://free.shapier.in/api/v1/cart', {
                user_id: userId,
                product_id: ProductDetails[0].id,
                quantity: quantity
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setIsAddedToCart(true);
            console.log(userId, ProductDetails[0].product_id, quantity)
        } catch (error) {
            console.log("Error adding to cart: ", error);
            if(error.response.data.code){
                navigate('/login')
            }
        }
    }

    const FaqItem = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleAnswer = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div className={`faq-item ${isOpen ? 'open' : ''}`}>
                <div className="faq-question-container" onClick={toggleAnswer}>
                    <span className="faq-question">{question}</span>
                    <span className="faq-icon">{isOpen ? '+' : '+'}</span>
                </div>
                {isOpen && <div className="faq-answer">{answer}</div>}
            </div>
        );
    };

    useEffect(() => {
        fetchProductDetails();
    }, []);


    return (
        <>
            <Header />
            <BottomBar />
            {ProductDetails.map((productDetails) => (
                <>
                    <div className="blank-container"></div>
                    <div className="DTcontainer">
                        <div className="DTproduct-image">
                            <img src={`https://free.shapier.in/images/${productDetails.product_image}`} alt={productDetails.product} />
                        </div>
                        <div className="DTproduct-details">
                            <h1 className="DTh1">{productDetails.product}</h1>
                            <p className="DTavailability">Availability: <span>In stock</span></p>
                            <p className="DTprice">Price: <span>{productDetails.sale_price}</span> <small>* Inclusive of all Taxes</small></p>
                            {/* <p className="DTdescription">Shakti gold cement price today in Hyderabad</p> */}
                            <p style={{ color: "grey" }}>by : {productDetails.vandor_name}</p>
                            <div className="DTquantity">
                                <label htmlFor="quantity">Qty:</label>
                                <input type="number" id="quantity" name="quantity" defaultValue={productDetails.minimum_qauntity} min={productDetails.minimum_qauntity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                            </div>
                            <div className="DTbuttons">
                                {!isAddedToCart ?
                                    <button className="DTadd-to-cart" onClick={addToCart}>ADD TO CART</button>
                                    :
                                    <button className='DTadd-to-cart'>&#10004;</button>
                                }
                                {/* <button className="DTcheckout">PROCEED TO CHECKOUT</button> */}
                            </div>
                            <div className="DTdelivery">
                                <h2>DELIVERY</h2>
                                <p>Usually Delivers in 12 to 48 hours</p>
                            </div>
                            <div className="DTshipping">
                                <h2>SHIPPING</h2>
                                <p>Free shipping on all orders* <small>(Subject to order value)</small></p>
                            </div>

                            <div className="faq-items">
                                <FaqItem question='Product Description' answer={productDetails.product_description} />
                            </div>

                            <div className="DTpayment-options">
                                <h2>EASY PAYMENT OPTIONS</h2>
                                <ul>
                                    <li>Net banking & Credit/ Debit/ UPI</li>
                                    <li>Cash on Delivery</li>
                                    <li>Demand Draft / Cheque / Money order</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="container mt-4 pt-5">
                        <h2>Similar Product</h2>

                        <CategoriesPageProductDivision category_names={'cement'} />
                    </div>


                </>
            ))}

        </>
    )
}
