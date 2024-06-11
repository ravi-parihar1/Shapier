import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/AdminServiceEnquiry.css'
import SideNav from './SideNav'

export default function AdminServiceEnquiry() {

    const [services, setServiceEnquiry] = useState([]);
    // const [services, setServiceEnquiry] = useState({
    //     first_name: '',
    //     last_name: '',
    //     mobile: '',
    //     email: '',
    //     zip_code: '',
    //     address: '',
    //     created_at: '',
    //     updated_at: '',
    //     service_name: ''
    //     // product_category_image: null
    // });

    const fetchAllServiceEnquiry = async () => {
        try {
            const { data } = await axios.get('https://free.shapier.in/api/v1/request_service');
            const arrayOfCategories = data.data;
            setServiceEnquiry(arrayOfCategories.map((category) => ({
                first_name: category.first_name,
                last_name: category.last_name,
                mobile: category.mobile,
                email: category.email,
                zip_code: category.zip_code,
                address: category.address,
                created_at: category.created_at,
                updated_at: category.updated_at,
                service_name: category.service_name,
            })));
        } catch (error) {
            console.log(error);
        }
    };



    useEffect(() => {
        fetchAllServiceEnquiry();
        // fetchSubcategories();
    }, []);


    return (
        <>
            <div className="admin-panel-container">
                <SideNav />
                <div className="content-container">
                    <h1 className="page-title">Service Enquiries</h1>
                    <div className="table-container">
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>SR. No</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Services Enquiry</th>
                                    <th>Zip Code</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td className="phone-number-cell">
                                            {user.mobile}

                                            {/* <FaCopy  onClick={() => copyToClipboard(user.phone)}/> */}

                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.service_name}</td>
                                        <td>{user.zip_code}</td>
                                        <td>{user.address}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}
