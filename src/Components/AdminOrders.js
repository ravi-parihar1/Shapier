import React, { useEffect, useState } from 'react';
import SideNav from './SideNav';
import axios from 'axios';

export default function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const [filter, setFilter] = useState({ username: '', phoneNumber: '' });

    const fetchAllOrders = async () => {
        try {
            const { data } = await axios.get('https://free.shapier.in/api/v1/order', {
                params: {
                    username: filter.username,
                    phoneNumber: filter.phoneNumber
                }
            });
            const arrayOfOrders = data.data;
            setOrders(arrayOfOrders.map((order) => ({
                id: order.id,
                order_id: order.order_id,
                user_id: order.user_id,
                total_amount: order.total_amount,
                payment_mode: order.payment_mode,
                payment_status: order.payment_status,
                bill_firstName: order.bill_firstName,
                bill_lastName: order.bill_lastName,
                bill_mobile: order.bill_mobile,
                bill_address: order.bill_address,
                bill_pincode: order.bill_pincode,
                bill_city: order.bill_city,
                bill_state: order.bill_state,
                bill_email: order.bill_email,
                gst_no: order.gst_no,
                product_names: order.product_names,
                created_at: order.created_at
            })));
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, [filter]); // Re-fetch when filter changes

    const handleSortByDate = () => {
        const sortedOrders = [...orders].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setOrders(sortedOrders);
    };

    const handleFilterChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="admin-panel-container">
                <SideNav />
                <div className="content-container">
                    <h1 className="page-title">Orders</h1>

                    <div className="filter-container">
                        <input
                            type="text"
                            name="username"
                            value={filter.username}
                            onChange={handleFilterChange}
                            placeholder="Search by Username"
                        />
                        <input
                            type="text"
                            name="phoneNumber"
                            value={filter.phoneNumber}
                            onChange={handleFilterChange}
                            placeholder="Search by Phone Number"
                        />
                        <button onClick={handleSortByDate}>Sort By Date</button>
                    </div>

                    <div className="table-container">
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>SR. No</th>
                                    <th>Order Id</th>
                                    <th>User Id</th>
                                    <th>Total Amount</th>
                                    <th>Payment Mode</th>
                                    <th>Payment Status</th>
                                    <th>Products</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Pincode</th>
                                    <th>Email</th>
                                    <th>Gst</th>
                                    <th>CREATED</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={order.id}>
                                        <td>{index + 1}</td>
                                        <td>{order.order_id}</td>
                                        <td>{order.user_id}</td>
                                        <td>{order.total_amount}</td>
                                        <td>{order.payment_mode}</td>
                                        <td>{order.payment_status}</td>
                                        <td>{order.product_names}</td>
                                        <td>{order.bill_firstName}</td>
                                        <td>{order.bill_lastName}</td>
                                        <td>{order.bill_mobile}</td>
                                        <td>{order.bill_address}</td>
                                        <td>{order.bill_city}</td>
                                        <td>{order.bill_state}</td>
                                        <td>{order.bill_pincode}</td>
                                        <td>{order.bill_email}</td>
                                        {order.gst_no ? <td>{order.gst_no}</td> : <td>Null</td>}
                                        <td>{order.created_at}</td>
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
