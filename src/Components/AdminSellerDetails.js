import React, { useEffect, useState } from 'react';
import SideNav from './SideNav';
import axios from 'axios';

export default function AdminSellerDetails() {
    const [sellerDetails, setSellerDetails] = useState([]);
    const [filter, setFilter] = useState({ companyName: '', city: '' });

    const fetchAllSellers = async () => {
        try {
            const { data } = await axios.get('https://free.shapier.in/api/v1/seller');
            const arrayOfSellerDetails = data.data;
            setSellerDetails(arrayOfSellerDetails.map((seller) => ({
                id: seller.id,
                mobile: seller.mobile,
                company_name: seller.company_name,
                contact_name: seller.contact_name,
                email: seller.email,
                city: seller.city,
                additional_info: seller.additional_info
            })));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllSellers();
    }, []);

    const filteredSellers = sellerDetails.filter((seller) =>
        seller.company_name.toLowerCase().includes(filter.companyName.toLowerCase()) &&
        seller.city.toLowerCase().includes(filter.city.toLowerCase())
    );

    const handleFilterChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="admin-panel-container">
                <SideNav />
                <div className="content-container">
                    <h1 className="page-title">Seller Details</h1>

                    <div className="filter-container">
                        <input
                            type="text"
                            name="companyName"
                            value={filter.companyName}
                            onChange={handleFilterChange}
                            placeholder="Filter by Company Name"
                        />
                        <input
                            type="text"
                            name="city"
                            value={filter.city}
                            onChange={handleFilterChange}
                            placeholder="Filter by City"
                        />
                    </div>

                    <div className="table-container">
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>SR. No</th>
                                    <th>Mobile</th>
                                    <th>Seller Name</th>
                                    <th>Company Name</th>
                                    <th>City</th>
                                    <th>Additional Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredSellers.map((seller, index) => (
                                    <tr key={seller.id}>
                                        <td>{index + 1}</td>
                                        <td>{seller.mobile}</td>
                                        <td>{seller.contact_name}</td>
                                        <td>{seller.company_name}</td>
                                        <td>{seller.city}</td>
                                        <td>{seller.additional_info}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
